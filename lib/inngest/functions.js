import { db } from "../prisma";
import { inngest } from "./client";
import { generateWithOpenRouter } from "../openrouter";

// Helper to add delay between requests
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // Runs weekly on Sundays at midnight
  async ({ step }) => {
    // Fetch industry data from the database
    const industries = await step.run("Fetch Industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
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

      // Add delay between requests to avoid rate limiting
      await sleep(2000);
      
      const text = await step.run(`Generate ${industry} insights`, async () => {
        return await generateWithOpenRouter(prompt, { temperature: 0.2 });
      });
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

      const insights = JSON.parse(cleanedText);

      await step.run(`Update ${industry} insights`,async()=>{
        await db.industryInsight.update({
          where:{industry},
            data: {
                ...insights,
                lastUpdated:new Date(),
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
            },
        });
        
      })


    }
  }
)