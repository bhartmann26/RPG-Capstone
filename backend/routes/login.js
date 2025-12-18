import express from "express";
import { db } from "../db.js";

const router = express.Router();

// PLEASE DONT FAIL ROUTER
router.post("/login", async (req, res) => {
    console.log("LOGIN BODY:", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password required" });
    }

    try {
        // Check if user exists with given email and password
        const [rows] = await db.query(
        "SELECT * FROM Users WHERE username = ? AND password = ?",
        [username, password]
        );

        if (rows.length === 0) {
        return res.status(400).json({ error: "Invalid credentials" });
        }

        // Simple session object (for frontend use)
        const user = rows[0];
        // sends user back
    res.json({  user });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});


export default router;