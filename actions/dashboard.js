"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateWithOpenRouter } from "@/lib/openrouter";

export const generateAIInsights = async (industry) => {
  const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;

  const text = await generateWithOpenRouter(prompt, { temperature: 0.2 });
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
};

export async function getIndustryInsights() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        include: { industryInsight: true },   
    });

    if (!user) throw new Error("User not found");

    if (!user.industry) {
        throw new Error("User industry not set");
    }

    if (!user.industryInsight) {
        const insights=await generateAIInsights(user.industry);

        const industryInsight = await db.industryInsight.create({
            data: {
                industry: user.industry,
                ...insights,
                lastUpdated: new Date(),
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
            },
        });
        return industryInsight;
    }

    const now = new Date();
    if (new Date(user.industryInsight.nextUpdate) <= now) {
      const insights = await generateAIInsights(user.industry);
      const refreshedInsight = await db.industryInsight.update({
        where: { industry: user.industry },
        data: {
          ...insights,
          lastUpdated: now,
          nextUpdate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        },
      });
      return refreshedInsight;
    }

    return user.industryInsight;
}