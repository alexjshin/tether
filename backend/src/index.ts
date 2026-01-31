import cors from "cors";
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use() registers middleware that runs on every request
// basically saying before any route handler runs, process the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
// app.use(cors({
//   origin: ["https://yourapp.com"],
//   credentials: true,
// }));
app.use(cors());

// Routes
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Tether API v1.0" });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not found" });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Tether API running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
});
