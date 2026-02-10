// backend/app.js

require("dotenv").config();

// imports
const express = require("express");
const path = require("path");
const { prisma } = require("./lib/prisma");

// initialize app
const app = express();

// middleware
app.use(express.json()); // parse json for apis
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static(path.join(__dirname, "public"))); // static files

// routes
// home route (before routers)
app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

const charactersRouter = require("./routes/characters");
app.use("/characters", charactersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}`);

  // test database connection
  try {
    await prisma.$connect();
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
});

// graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Database disconnected");
  process.exit(0);
});
