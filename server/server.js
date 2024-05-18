const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  port: 7352,
  user: "root",
  password: "",
  database: "users",
  connectionLimit: 10,
});

// Endpoint to get places
app.get("/", (req, res) => {
  pool.query("SELECT * FROM place", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const port2 = 3001;
app.get("/", (req, res) => {
  pool.query("SELECT * FROM registrations", (err, results1) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results1);
  });
});

app.listen(port2, () => {
  console.log(`Server running at http://localhost:${port2}`);
});
