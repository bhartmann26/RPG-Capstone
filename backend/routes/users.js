import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;