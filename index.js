import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import env from 'dotenv';
import GoogleStrategy from 'passport-google-oauth2';

// Create __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const saltRounds = 10;
env.config();

// Set the views directory inside src
app.set('views', path.join(__dirname, 'src', 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static("public"));

// Route for login page (GET)
app.get('/', (req, res) => {
  res.render('index.ejs');
});


// app.get("/gallary", (req, res) => {
//   res.render("gallary.ejs");
// });

// app.get("/login", (req, res) => {
//   res.render("login.ejs");
// });


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});