import express from "express";
import cors from "cors";
import { db } from "./db.js";
import searchRoutes from "./routes/search.js";
import loginRoutes from './routes/login.js';

const app = express();
app.use(cors());
app.use(express.json());

//routes to backend
app.use("/api", loginRoutes);
app.use("/api/search", searchRoutes);


// test cases (implement later to CI possibly??)

//does backend exist?
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

//does db exist?
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Games LIMIT 5");
    res.json(rows);
  } catch (err) {
    console.error("DB query error:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});