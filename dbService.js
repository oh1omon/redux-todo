const mysql = require('mysql');
require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

// conn.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('DB connected');
// });

class DbService {
    async getAll() {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM tasks`;
                conn.query(query, (err, result) => {
                    if (err) {
                        reject(new Error(err.message));
                    }
                    resolve(result);
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    async insertNew(task) {
        try {
            return new Promise((resolve, reject) => {
                //Inserting task
                const query = 'INSERT INTO tasks(task, done) VALUES(?,?)';
                const data = [task.task, task.done];
                conn.query(query, data, (err) => {
                    if (err) {
                        reject(new Error(err.message));
                    }
                });
                //Getting the inserted task
                const respQuery =
                    'SELECT * FROM tasks ORDER BY id DESC LIMIT 1;';
                conn.query(respQuery, (err, result) => {
                    if (err) {
                        reject(new Error(err.message));
                    }
                    resolve(result);
                });
            });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new DbService();
