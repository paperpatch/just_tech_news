# Just Tech News

[News-based site](https://just-tech-news-proj.herokuapp.com/) with user-models database. An tutorial learning exercise to use `Express Handlebars` and `Express-Session`.

## Table of Contents

* [Setup](#setup)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Setup
:floppy_disk:

Go to [Node's website](https://nodejs.org/en/) and follow the download instructions for your appropriate setup. NPM, or Node Package Manager, is the default package manager for Node.js. It is distributed with Node.js.

The database uses the following npm:
- [Node Package Manager](https://nodejs.org/en/)
  - Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`.
  - This will also help install express on your system and manage any other dependencies in your script.
- [Dotenv](https://www.npmjs.com/package/dotenv)
  - Loads environment variables from a `.env` file into `process.env`. Sync .env files between machines, environments, and team members.
- [bcrypt](https://www.npmjs.com/package/bcrypt)
  - Library to help hash passwords.

Uses MySQL and MySQL2 tools for this application:

- [MySQL](https://www.mysql.com/)
  - Considered the most reliable, scaleable, and developer-friendly open source relational dtabase management system. It powers the back end of many popular social, streaming, and service web applications.
- [MySQL2](https://www.npmjs.com/package/mysql2)
  - An npm package for Node.js with a focus on performance. Connects Node.js applications to the MySQL database.
- [Sequelize](https://sequelize.org/)
  - Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Features solid transaction support, relations, eager and lazy loading, read replication and more.
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
  - Logicless templating language that keeps the View and the code separate and compiles templates into JavaScript functions. An extension to the Mustache templating language.
- [Express-Session](https://www.npmjs.com/package/express-session)
  - Express.js middleware that uses sessions, mechanism that helps applications to determine whether multiple requests came form the same client. Developers may assign every user a unique session so that their application can store the user state, and thus authenticate users.
- [Connect Session Store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  - Provides applications with a scalable store for sessions. The express-session package's default server-side session storage, `MemoryStore`, is purposely not designed for a production environment, will leak memory under most conditions, doesn't scale past a single process, and is only meant for debugging and developing. The connect-session-sequelize package resolves these issues and is compatible with the Sequelize ORM.

This repository uses the following server:

- [Heroku](https://heroku.com/)
  - A cloud application platform service that enables developers to build, run and operate applications entirely in the cloud.
- [JawsDB Add-On](https://elements.heroku.com/addons/jawsdb)
  - Uses JawsDB MySQL, a Heroku add-on, that provides a fully functional MySQL database server for use with Heroku application.

## Usage

:computer:

Go to [Just Tech News](https://just-tech-news-proj.herokuapp.com/) and navigate through seeded articles and links. Note that links are broken as this repository is a learning tutorial exercise.

User is able to:
- Create a new account to post their own title and links to a website.
- Edit and comment their own posts.
- Upvote and comment other posted newslink provided the user is logged in.

## Contributing

:octocat:

[paperpatch](https://github.com/paperpatch)

## License

:receipt:
