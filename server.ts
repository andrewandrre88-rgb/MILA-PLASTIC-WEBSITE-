import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // AI Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      const { GoogleGenAI } = await import("@google/genai");
      const genAI = new GoogleGenAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash", 
        systemInstruction: `You are a friendly, helpful representative from the Mila Plastics engineering team. 
          Speak like a real person who deeply understands our industry and cares about the user's project.

          About Mila Plastics:
          - We specialize in high-performance trigger sprayers: Classic Stream (industrial), Aero-Mist (fine distribution), and Foam-Master (detergents).
          - Our facility in Quzhou City, China, runs 120 injection molding machines with a daily capacity of 550,000 units.
          - We maintain extremely high quality standards (defect rate <0.01%) using 100% optical inspection.
          - We ship globally to over 45 countries.

          Style Guidelines:
          - KEEP IT SHORT. People are busy! ⚡
          - USE EMOJIS. It adds a human touch. 😊🚀
          - BE SALES-ORIENTED. Always ask questions that nudge the user to find a solution or request a quote. 📈
          - Speak naturally. Use "we" and "I".
          - If you're unsure about a detail, point them to our sales office at +8618567413851.
          - Example sales nudges: "What volume are you looking to produce?" or "Would you like a technical spec sheet for that model?"`,
      });

      const chat = model.startChat({
        history: messages.slice(0, -1).map((m: any) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
      });

      const lastMessage = messages[messages.length - 1].text;
      const result = await chat.sendMessage(lastMessage);
      const response = await result.response;
      
      res.json({ text: response.text() });
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built static files
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static assets
    app.use(express.static(distPath, { index: false }));

    // Handle index.html
    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      res.sendFile(indexPath);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
