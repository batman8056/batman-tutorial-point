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
import flash from "connect-flash";
import GoogleStrategy from 'passport-google-oauth2';

// Create __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const saltRounds = 10;
env.config();


// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory inside src
app.set("views", path.join(__dirname, "src", "views"));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
//Use middleware like body-parser (now built into Express) to parse incoming request data
app.use(bodyParser.urlencoded({ extended: true }));

// created a session 
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 *60 * 24,
  }
}))
app.use(flash());
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  next();
});

//db configuration
const db = new pg.Client({
  user:process.env.PG_USER,
  host:process.env.PG_HOST,
  database:process.env.PG_DATABASE,
  password:process.env.PG_PASSWORD,
  port:process.env.PG_PORT,
});
db.connect();

//after created of session we need to initialize the session using passport
app.use(passport.initialize());
app.use(passport.session());

// Route for login page (GET)
app.get('/', (req, res) => {
  res.render('login.ejs');
});

app.get('/forgot-password', (req, res) => {
  res.render('forgot-password.ejs');
});

app.get("/login", (req, res) => {
  if (req.isAuthenticated()) return res.redirect("/index");
  res.render("login");
});

app.get('/signup', (req, res) => {
  res.render("signup", { 
      error: null, // No error by default
      username: "",
      email: "",
      dob: "",
      gender: ""
    });
});

app.get('/profile',async (req, res) => {
  res.render('profile.ejs')
});

app.get("/index", (req, res) => {
  // console.log(req.user);
  if (req.isAuthenticated()){
    res.render("index.ejs");
  }else{
    res.redirect("/login");
  }
})
app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
app.post("/login", 
  passport.authenticate("local",{
  successRedirect: "/index",
  failureRedirect: "/login",
  failureFlash: true,
})
);

app.get("/auth/google", 
  passport.authenticate("google",{
  scope:["profile","email"],
})
);
app.get("/auth/google/secrets", passport.authenticate("google",{
  successRedirect: "/index",
  failureRedirect: "/login"
}))

app.post("/signin-form", async (req, res) => {
  const regUserName = req.body.username
  const regPassword = req.body.password
  const regEmail = req.body.email
  const regDob = req.body.dob
  const regGender = req.body.gender
  // console.log(regUserName,regPassword,regEmail,regDob,regGender);
  try{
    const checkResult = await db.query("SELECT * FROM users_profiles WHERE email = $1", [
      regEmail,
    ]);
    if (checkResult.rows.length > 0) {
      // Render form with error message
      return res.render("signup", { 
              error: "Email already exists. Try Again.", 
              username: regUserName, 
              email: regEmail, 
              dob: regDob, 
              gender: regGender 
          });
    }else {
      //hashing the password and saving it in the database
      bcrypt.hash(regPassword, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users_profiles (username, email, password, dob, gender) VALUES ($1, $2, $3, $4, $5)",
            [regUserName, regEmail, hash, regDob, regGender]
          );
          const user = result.rows[0];
        req.login(user, (err) =>{
          console.log(err);
          res.redirect("/index")
        })
        }
      });
    }
  }catch(err){
    console.log(err);
  }
});


//username and password we directly getting req data from login.ejs
passport.use("local",
  new Strategy(async function verify(username, password, cb){
  try {
    const result = await db.query("SELECT * FROM users_profiles WHERE username = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err)
        } else {
          if (result) {
            return cb(null, user);
          } else {
            return cb(null, false, { message: "Incorrect password."});
          }
        }
      });
    } else {
      return cb(null, false, { message: "User not found."})
    }
  } catch (err) {
    return cb(err);
  }
})
);

passport.use("google", 
  new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
async (accessToken, refreshToken, profile, cb) =>{
  console.log(profile);
  try{
    const result = await db.query("SELECT * FROM users_profiles WHERE email = $1",[
      profile.email,
    ]);
    if (result.rows.length === 0){
      const newUser =await db.query("INSERT INTO users_profiles (username, email, password) VALUES ($1, $2, $3)",[profile.given_name, profile.email,"google"]
      );
      cb(null, newUser.rows[0])
    }else{
      //Already exist user
      cb(null, result.rows[0])
    }
  }catch(err){
    cb(err);
  }
})
);

passport.serializeUser((user, cb) =>{
  cb(null, user);
});

passport.deserializeUser((user, cb) =>{
  cb(null, user);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});