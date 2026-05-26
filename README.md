<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MK-DlR/wheres-waldo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Where's Waldo</h3>

  <p align="center">
    Full-stack "Where's Waldo" style game web app where users are timed on how quickly they can locate all 3 randomly selected characters.
    <br />
    <a href="https://github.com/MK-DlR/wheres-waldo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wheres-waldo-vert.vercel.app/">View Demo</a>
    &middot;
    <a href="https://github.com/MK-DlR/wheres-waldo/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/MK-DlR/wheres-waldo/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#notes">Notes</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#how-to-use-the-app">How to Use the App</a></li>
        <li><a href="#default-setup-behavior">Default Setup Behavior</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Express]][Express-url]
- [![Javascript][Javascript]][Javascript-url]
- [![Node.js]][Node-url]
- [![Postgres]][Postgres-url]
- [![Prisma]][Prisma-url]
- [![React][React.js]][React-url]
- [![Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (recommended v22+)
- npm
- PostgreSQL database

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/MK-DlR/wheres-waldo.git
   cd wheres-waldo
   ```
2. Install dependencies<br />
   Frontend:
   ```sh
   cd frontend
   npm install
   ```
   Backend:
   ```sh
   cd ../backend
   npm install
   ```
3. Set up environment variables<br />
   Backend (`backend/.env`):
   ```sh
   DATABASE_URL="your_postgres_connection_string"
   ```
   Frontend (`frontend/.env`):
   ```sh
   VITE_API_URL=http://localhost:3000
   ```
4. Set up the database (Prisma)<br />
   From the `backend` folder, run the following commands:<br />
   4.1. Generate Prisma client
   ```sh
   npx prisma generate
   ```
   4.2. Create database tables<Br />
   ```sh
   npx prisma migrate dev --name init
   ```
5. Seed the database (IMPORTANT)<br />
   This will create:
   - All hidden game characters
   - Stored character coordinates
   - Character image references
   ```sh
   node prisma/seed.js
   ```
6. Run the application<br />
   Start backend (from `/backend`):
   ```sh
   node --watch app.js
   ```
   Start frontend (from `/frontend`):
   ```sh
   npm run dev
   ```
7. Open the app<br />
   It's recommended to start the backend before starting the frontend, or the database won't be running when the frontend loads.<br />
   Frontend: `http://localhost:5173`<br />
   Backend: `http://localhost:3000`

### Notes

- Backend: Express + Prisma + PostgreSQL
- Frontend: React + Vite
- Default seed includes all character data and locations
- CORS is configured for local development

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This is a full-stack Where’s Waldo-style game application where players must locate 3 randomly selected hidden characters within a large image as quickly as possible.

The application validates character selections against stored coordinates in the database and tracks completion time for leaderboard functionality.

### How to Use the App

1. Open the app at http://localhost:5173 or visit the [live demo](https://wheres-waldo-vert.vercel.app/)
2. Start a new game
3. Search the image for hidden characters
4. Click on the image where you think a character is located
5. Select the character name from the popup menu
6. Correct selections will mark the character as found
7. Find all characters to complete the game
8. Submit your score to the leaderboard

### Default Setup Behavior

- All character data is automatically created through the seed script
- Character positions are stored in the PostgreSQL database
- The backend validates player selections using coordinate comparisons
- Note: The leaderboard is not currently publically visible, but is functional and can be checked via prisma

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Improve CSS
- [ ] Public leaderboard
- [ ] Restart/new game button

See the [open issues](https://github.com/MK-DlR/wheres-waldo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

As this is a student project created for The Odin Project curriculum, it is currently not open for contributions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/MK-DlR/wheres-waldo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MK-DlR/wheres-waldo" alt="contrib.rocks image" />
</a>

<!-- CONTACT -->

## Contact

Adrien Newman - [@MK_DlR](https://twitter.com/MK_DlR) - adriennewman92@gmail.com

Project Link: [Where's Waldo](https://github.com/MK-DlR/wheres-waldo) & [Live Demo](https://wheres-waldo-vert.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/dashboard)
- [Font Awesome](https://fontawesome.com/)
- [The Raid](https://www.debutart.com/artist/laurie-greasley/the-raid) by [Laurie Greasley](https://www.debutart.com/artist/laurie-greasley)
- [Aim Icon](https://www.flaticon.com/free-icon/target_2699685?term=aim&page=1&position=8&origin=tag&related_id=2699685) by [Freepik - Flaticon](https://www.flaticon.com/)
- [Map Icon](https://icons8.com/icon/44023/location) by [Icons8](https://icons8.com/)
- [Othneil Drew's Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center"><img src="images/everywhere.gif" alt="Kiryu finding Majima in a stack of hay"></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MK-DlR/wheres-waldo.svg?style=for-the-badge
[contributors-url]: https://github.com/MK-DlR/wheres-waldo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MK-DlR/wheres-waldo.svg?style=for-the-badge
[forks-url]: https://github.com/MK-DlR/wheres-waldo/network/members
[stars-shield]: https://img.shields.io/github/stars/MK-DlR/wheres-waldo.svg?style=for-the-badge
[stars-url]: https://github.com/MK-DlR/wheres-waldo/stargazers
[issues-shield]: https://img.shields.io/github/issues/MK-DlR/wheres-waldo.svg?style=for-the-badge
[issues-url]: https://github.com/MK-DlR/wheres-waldo/issues
[license-shield]: https://img.shields.io/github/license/MK-DlR/wheres-waldo.svg?style=for-the-badge
[license-url]: https://github.com/MK-DlR/wheres-waldo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adrien-newman
[product-screenshot]: images/screenshot.png

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Express]: https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/en/
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Postgres]: https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-router]: https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white
[React-router-url]: https://reactrouter.com/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Vite]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff
[Vite-url]: https://vite.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
