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
  user: "badcdb842abde8",
  password: "01a497f1",
  database: "heroku_1557f20cd104a50",
});

module.exports = pool.promise();
