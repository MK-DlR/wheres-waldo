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
        x_coord: 39.285714285714285,
        y_coord: 32.04651162790697,
        image: "/images/mulder.png",
      },
      {
        name: "Meyers",
        x_coord: 13.642857142857142,
        y_coord: 39.25581395348837,
        image: "/images/meyers.png",
      },
      {
        name: "Snake",
        x_coord: 21.357142857142858,
        y_coord: 24.325581395348834,
        image: "/images/snake.png",
      },
      {
        name: "Headcrab",
        x_coord: 9.428571428571429,
        y_coord: 26.41860465116279,
        image: "/images/headcrab.png",
      },
      {
        name: "Freddy",
        x_coord: 52,
        y_coord: 13.627906976744185,
        image: "/images/freddy.png",
      },
      {
        name: "Abe",
        x_coord: 13.428571428571429,
        y_coord: 46.6046511627907,
        image: "/images/abe.png",
      },
      {
        name: "Chucky",
        x_coord: 23.714285714285715,
        y_coord: 19.627906976744185,
        image: "/images/chucky.png",
      },
      {
        name: "Gizmo",
        x_coord: 97.78571428571429,
        y_coord: 46.651162790697676,
        image: "/images/gizmo.png",
      },
      {
        name: "Samara",
        x_coord: 90.07142857142857,
        y_coord: 46.23255813953489,
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
