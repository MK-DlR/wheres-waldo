// backend/routes/characters.js

const express = require("express");
const { prisma } = require("../lib/prisma");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // get all characters
    const characters = await prisma.character.findMany();

    // randomly select 3
    for (let i = characters.length - 1; i > 0; i--) {
      // generate random index
      const j = Math.floor(Math.random() * (i + 1));

      // swap elements at indices i and j
      const temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
    }

    return res.send(characters.slice(0, 3));
  } catch (error) {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = router;
