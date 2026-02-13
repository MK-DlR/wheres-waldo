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
        x_coord: 19.607142857142858,
        y_coord: 81.4186046511628,
        image: "/images/gizmo.png",
      },
      {
        name: "Samara",
        x_coord: 70.5,
        y_coord: 79.3953488372093,
        image: "/images/samara.png",
      },
      {
        name: "Ellie",
        x_coord: 35.75,
        y_coord: 83.04651162790697,
        image: "/images/ellie.png",
      },
      {
        name: "Facehugger",
        x_coord: 47.67857142857143,
        y_coord: 56.906976744186046,
        image: "/images/facehugger.png",
      },
      {
        name: "Gordon",
        x_coord: 18.321428571428573,
        y_coord: 68.5813953488372,
        image: "/images/gordon.png",
      },
      {
        name: "Gremlin",
        x_coord: 80.53571428571429,
        y_coord: 47.418604651162795,
        image: "/images/gremlin.png",
      },
      {
        name: "Hellboy",
        x_coord: 89.75,
        y_coord: 85.37209302325581,
        image: "/images/hellboy.png",
      },
      {
        name: "Herbert",
        x_coord: 66.96428571428571,
        y_coord: 9.465116279069766,
        image: "/images/herbert.png",
      },
      {
        name: "Isaac",
        x_coord: 64.75,
        y_coord: 90.44186046511628,
        image: "/images/isaac.png",
      },
      {
        name: "Killbot",
        x_coord: 67.25,
        y_coord: 39.23255813953489,
        image: "/images/killbot.png",
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
