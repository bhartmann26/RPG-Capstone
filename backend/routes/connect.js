const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "admin_user",
  password: "admin_password",
  database: "RPG_DB"
});
