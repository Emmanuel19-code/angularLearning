import mysql from 'mysql2';
import {} from 'dotenv/config'

// Create the connection object
export const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database:process.env.DATABASE
});


export const Connection = () => {
  conn.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log("Connected to MySQL!");
    conn.query('CREATE DATABASE IF NOT EXISTS employee', (err, result) => {
      if (err) {
        console.error('Error creating database:', err);
        return;
      }
      console.log("Database created or already exists");
    });
  });
};

