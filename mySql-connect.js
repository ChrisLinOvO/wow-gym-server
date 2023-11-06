const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "wow-gym-v2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 創建雲端DB參考：
// https://www.youtube.com/watch?v=RTMCD-oIpz8&t=9s
// https://www.youtube.com/watch?v=CXiT-DWn1zs&list=PLmuGl8O_czsbymkUbE92njOUHtnMGSOFC&index=26

// production config
// const pool = mysql.createPool({
//   host: "b5ps8x6brydtzteexohi-mysql.services.clever-cloud.com",
//   user: "u2dcit2jejtu14pt",
//   password: "sq3z60coqbG8wdZFujBT",
//   database: "b5ps8x6brydtzteexohi",
// });

module.exports = pool.promise();


// -------