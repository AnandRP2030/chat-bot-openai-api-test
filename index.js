import express from "express";
import OpenAI from "openai";
const openai = new OpenAI();
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;
  console.log("p", prompt);
  try {
    const output = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });
    console.log("output", output);
    res.json({ message: output });
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.listen(4000, () => console.log("Server running on port 3000"));
