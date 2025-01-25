<h1 align="center">Hi 👋, I'm Manikandan</h1>
<h3 align="center">A passionate frontend and backend developer from India</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=batman8056&label=Profile%20views&color=0e75b6&style=flat" alt="batman8056" /> </p>

<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=batman8056" alt="batman8056" /></a> </p>

- 🔭 I’m currently working on [batman-tutorial-point](https://batman8056.github.io/batman-tutorial-point/)

<h3 align="left">Connect with me:</h3>
<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer"> <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" width="40" height="40"/> </a> </p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=batman8056&show_icons=true&locale=en" alt="batman8056" /></p>


# batman-tutorial-point

This project is a user authentication system that uses Node.js, Express.js, PostgreSQL, and Passport.js. It supports Google OAuth for third-party login and includes secure session management.




## Features

- User registration and login functionalitye
- Password hashing for security using bcrypt
- Google OAuth for third-party login
- PostgreSQL database integration
- Responsive design using EJS and CSS






## Table of Contents

- 1. Installation
- 2. Prerequisites
- 3. Database Setup
- 4. Environment Variables
- 5. Execution Steps
- 6. Folder Structur
- 7. Related


## 1. Installation

Run the following command to install the required dependencies:

```bash
  cd batman-tutorial-point
  npm install
```
    
## 2. Prerequisites

- `1. Install `[Node.js.](https://nodejs.org/en)
- `2. Install `[PostgreSQL.](https://www.postgresql.org/download/)
- `3. Set up Google OAuth credentials by following the' [Google OAuth tutorial.](https://www.passportjs.org/tutorials/google/register/)
## 3. Database Setup

- Start PostgreSQL and create a new database:
 `CREATE DATABASE your_database_name;`
- Use the provided SQL queries to create the necessary tables:
`CREATE TABLE users_profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    dob DATE,
    gender ENUM('male', 'female'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`


## 4. Environment Variables
-  Create a .env file in the root directory and configure the following variables:

- `GOOGLE_CLIENT_ID="your-google-client-id"`
- `GOOGLE_CLIENT_SECRET="your-google-client-secret"`
- `SESSION_SECRET="your-session-secret"`
- `PG_USER="your-postgres-username"`
- `PG_HOST="localhost"`
- `PG_DATABASE="your-database-name"`
- `PG_PASSWORD="your-postgres-password"`
- `PG_PORT="5432"`
## 5. Execution Steps

Clone the project

```bash
  git clone https://github.com/batman8056/batman-tutorial-point.git
```

Go to the project directory

```bash
  cd batman-tutorial-point
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```
## 6. Folder Structur

project/
│

├── src/

       ├── views/            # EJS templates

       ├── routes/           # Route handlers

       ├── controllers/      # Business logic
    

├── public/               # Static files (CSS, JS, images)

       ├── css/              # Stylesheets

       ├── images/           # Images
│── .env                  # Environment variables

├── package.json          # Dependencies and scripts

├── index.js              # Main server file

├── README.md             # Project documentation

## 7. Related

Here are some related referance

[Node.js](https://github.com/batman8056/Node.js/tree/main/1%20Chapter)

[File System Module and Express.js](https://github.com/batman8056/Node.js/tree/main/2%20Chapter)

[Asynchronous Programming](https://github.com/batman8056/Node.js/tree/main/3%20Chapter)

[Embedded JavaScript Templates](https://github.com/batman8056/Node.js/tree/main/3.1%20Chapter)

[What is API](https://github.com/batman8056/Node.js/tree/main/4%20Chapter)

[Build your own API](https://github.com/batman8056/Node.js/tree/main/4.1%20Chapter)

[Backend storage some where it is storing](https://github.com/batman8056/Node.js/tree/main/5%20Chapter)

[Authentication and Security Handling Credentials and Desiging a Security login](https://github.com/batman8056/Node.js/tree/main/7%20Chapter)

## License

This project is licensed under [Manikandan Pandian](https://github.com/batman8056)
