// backend/routes/characters.js

const express = require("express");
const { prisma } = require("../lib/prisma");

const router = express.Router();

// get 3 random characters from character pool
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

// verify user's character guess
router.post("/verify", async (req, res) => {
  try {
    // extract character name and coords
    const { name, x, y } = req.body;

    // search for character by name
    const result = await prisma.character.findFirst({
      where: {
        name: name,
      },
    });
    if (result) {
      // determine difference tolerance allowed for coord guess
      const xDifference = Math.abs(x - result.x_coord);
      const yDifference = Math.abs(y - result.y_coord);

      console.log("Clicked:", x, y);
      console.log("Stored:", result.x_coord, result.y_coord);
      console.log("Differences:", xDifference, yDifference);

      // compare x and y coords to difference tolerance
      if (xDifference <= 1 && yDifference <= 1) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = router;
