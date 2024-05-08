import OpenAI from "openai";

const openai = new OpenAI();

async function main(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  return completion;
}

export { main };
