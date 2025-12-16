import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// test cases (implement later to CI possibly??)
app.get("/api/test-insert", async (req, res) => {
  try {
    // Insert a sample game
    const insertQuery = `
      INSERT INTO Games (game_id, title)
      VALUES (?, ?)
    `;
    const values = [
      "1",
      "HOLLOW KNIGHT."
    ];
    await db.query(insertQuery, values);

    // Fetch all games to verify
    const [rows] = await db.query("SELECT * FROM Games");
    res.json(rows);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

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