// backend/routes/scores.js

const express = require("express");
const { prisma } = require("../lib/prisma");

const router = express.Router();

// submit user's name and time (score)
router.post("/submit", async (req, res) => {
  try {
    // extract user's name and time
    const { name, time } = req.body;

    const userData = await prisma.score.create({ data: { name, time } });
    return res.send(userData);
  } catch (error) {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = router;
