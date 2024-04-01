import mysql from 'mysql'
import dbConfig from '../configs/db.config.quiz.js'

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ');
      return;
    }
    console.log('Connected to database ');

  });
export default connection