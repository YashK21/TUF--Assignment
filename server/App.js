const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "code_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

// Define routes for handling form submission and data retrieval
app.post("/submit", (req, res) => {
  const { username, language, stdin, sourceCode } = req.body;
  const timestamp = new Date();
  //use type as time for timestamp in DB
  console.log(timestamp);

  const query = `INSERT INTO submissions (username, language, stdin, sourceCode, timestamp)
                 VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    query,
    [username, language, stdin, sourceCode, timestamp],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into database: " + err);
        return res.status(500).send("Internal Server Error");
      }
      res.sendStatus(200);
    }
  );
});

app.get("/display", (req, res) => {
  connection.query("SELECT * FROM submissions", (err, results) => {
    if (err) {
      console.error("Error fetching data from database: " + err);
      return res.status(500).send("Internal Server Error");
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
