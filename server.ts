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

    // Handle index.html and inject runtime environment variables
    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      
      if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, "utf8");
        
        // Inject runtime GEMINI_API_KEY into the HTML so the frontend can access it
        const envScript = `
          <script>
            window.process = window.process || {};
            window.process.env = window.process.env || {};
            window.process.env.GEMINI_API_KEY = ${JSON.stringify(process.env.GEMINI_API_KEY || "")};
          </script>
        `;
        
        content = content.replace("</head>", `${envScript}</head>`);
        res.send(content);
      } else {
        res.status(404).send("Not Found");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
