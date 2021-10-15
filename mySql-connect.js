const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "12345",
//   database: "mydb",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
// production config

const pool = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b42f4a7274b8ff",
  password: "3c3c37ed",
  database: "heroku_28e16c61fcb839f",
});

module.exports = pool.promise();



