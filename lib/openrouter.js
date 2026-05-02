const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function generateWithOpenRouter(prompt, options = {}) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENROUTER_API_KEY environment variable");
  }

  const model = options.model || process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "X-Title": "SENSAI",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: options.temperature ?? 0.7,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const providerMessage = data?.error?.message || `OpenRouter request failed with status ${response.status}`;
    throw new Error(providerMessage);
  }

  const content = data?.choices?.[0]?.message?.content;
  if (!content || typeof content !== "string") {
    throw new Error("OpenRouter response did not contain text content");
  }

  return content.trim();
}