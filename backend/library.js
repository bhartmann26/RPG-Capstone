import express from "express";
import { db } from "./db.js";

const router = express.Router();

// Save or like a game
router.post("/", async (req, res) => {
  const { userId, gameId, saved, liked } = req.body;

  try {
    const query = `
      INSERT INTO UserLibrary (user_id, game_id, saved, liked)
      VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        saved = VALUES(saved),
        liked = VALUES(liked)
    `;

    await db.query(query, [
        userId,
        gameId,
        saved ? 1 : 0,
        liked ? 1 : 0
    ]);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update library" });
  }
});

// Get user library
router.get("/:userId", async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT g.*, ul.saved, ul.liked
       FROM Games g
       JOIN UserLibrary ul ON g.game_id = ul.game_id
       WHERE ul.user_id = ?`,
      [req.params.userId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch library" });
  }
});

export default router;
