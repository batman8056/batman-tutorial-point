import express from "express";
import path from 'path';

import { fileURLToPath } from 'url';

// Create __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Set the views directory inside src
app.set('views', path.join(__dirname, 'src', 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');


app.use(express.static("public"));
app.get('/', (req, res) => {
  res.render('index');
});


// app.get("/gallary", (req, res) => {
//   res.render("gallary.ejs");
// });

// app.get("/login", (req, res) => {
//   res.render("login.ejs");
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});