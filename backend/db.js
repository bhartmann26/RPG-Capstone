import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

//info in .env for a bit of security, even though this is all local anyways
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});