// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const app = express();
// const port = 8080;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Create MySQL connection pool
// const pool = mysql.createPool({
//   host: "localhost",
//   port: 7328,
//   user: "root",
//   password: "",
//   database: "users",
//   connectionLimit: 10,
// });

// // Endpoint to get places
// app.get("/", (req, res) => {
//   pool.query("SELECT * FROM place", (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });

// const port2 = 3001;
// app.get("/", (req, res) => {
//   pool.query("SELECT * FROM registrations", (err, results1) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results1);
//   });
// });

// app.listen(port2, () => {
//   console.log(`Server running at http://localhost:${port2}`);
// });

// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Create Post API
// app.post("/create", upload.single("image"), (req, res) => {
//   const { title, blogs } = req.body;
//   const image_path = req.file ? req.file.path : null;

//   const sql = "INSERT INTO blogs (title, image_path, blog) VALUES (?, ?, ?)";
//   db.query(sql, [title, image_path, blog], (err, result) => {
//     if (err) throw err;
//     res.send({ message: "Post created", postId: result.insertId });
//   });
// });

// // Serve images
// app.use("/create", express.static("uploads"));

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8080; // mnn par hai

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  port: 7328,
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

// Endpoint to get registrations

app.get("/registrations", (req, res) => {
  pool.query("SELECT * FROM registrations", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Create Post API
app.post("/create", upload.single("image"), (req, res) => {
  const { title, blog } = req.body; // Fixed variable name to blog
  const image_path = req.file ? req.file.path : null;

  const sql = "INSERT INTO blogs (title, image_path, blog) VALUES (?, ?, ?)";
  pool.query(sql, [title, image_path, blog], (err, result) => {
    if (err) throw err;
    res.send({ message: "Post created", postId: result.insertId });
  });
});

// Serve images
app.use("/uploads", express.static("uploads"));

// Only one app.listen call
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
