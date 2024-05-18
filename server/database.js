const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  port: 7352,
  user: "root",
  password: "",
  database: "users",
  connectionLimit: 10,
});

pool.query("SELECT * FROM place", (err, results, field) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
  console.log("Query results:", results);
});

module.exports = pool;
