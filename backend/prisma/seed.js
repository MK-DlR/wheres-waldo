// backend/prisma/seed.js

require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

const { PrismaClient } = require("../generated/prisma");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const createMany = await prisma.character.createMany({
    data: [
      {
        name: "Mulder",
        x_coord: 13.714285714285715,
        y_coord: 39.348837209302324,
        image: "/images/mulder.png",
      },
      {
        name: "Meyers",
        x_coord: 96.35714285714285,
        y_coord: 3.0697674418604652,
        image: "/images/meyers.png",
      },
      {
        name: "Snake",
        x_coord: 9.714285714285714,
        y_coord: 26.27906976744186,
        image: "/images/snake.png",
      },
      {
        name: "Headcrab",
        x_coord: 5.928571428571429,
        y_coord: 65.2093023255814,
        image: "/images/headcrab.png",
      },
      {
        name: "Freddy",
        x_coord: 36.92857142857143,
        y_coord: 11.953488372093023,
        image: "/images/freddy.png",
      },
      {
        name: "Abe",
        x_coord: 4.857142857142857,
        y_coord: 47.3953488372093,
        image: "/images/abe.png",
      },
      {
        name: "Chucky",
        x_coord: 5.428571428571429,
        y_coord: 18.651162790697676,
        image: "/images/chucky.png",
      },
      {
        name: "Gizmo",
        x_coord: 89.92857142857143,
        y_coord: 46.23255813953489,
        image: "/images/gizmo.png",
      },
      {
        name: "Samara",
        x_coord: 70.5,
        y_coord: 79.3953488372093,
        image: "/images/samara.png",
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
