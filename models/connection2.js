import mysql from 'mysql'
import dbConfig from '../configs/db.config.quiz.js'

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

connection.getConnection((err) => {
    if (err) {
      console.error('Error connecting to database', (err));
      return;
    }
    console.log('Connected to database');
  });
export default connection

// import mysql from 'mysql';

// const pool = mysql.createPool({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB,
//     port: dbConfig.PORT,
//     waitForConnections: true, // optional, you can adjust based on your needs
//     connectionLimit: 10, // optional, you can adjust based on your needs
//     queueLimit: 0 // optional, you can adjust based on your needs
// });

// export default pool // Return promise-based pool