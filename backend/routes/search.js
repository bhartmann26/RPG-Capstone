import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Search route hit:", req.query.q);
    const q = req.query.q;

    // guard clause
    if (!q || !q.trim()) {
        return res.json([]);
    }

    try {
        const [rows] = await db.query(
        `SELECT game_id, title
        FROM Games
        WHERE title LIKE ?`,
        [`%${q}%`]
    );

    res.json(rows);
    } catch (err) {
        console.error("Search error:", err.sqlMessage || err);
        res.status(500).json({ error: "Database error" });
    }
});

export default router;