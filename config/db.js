import mysql from 'mysql';

const db = mysql.createConnection({
    host:'localhost',
    database:'tallerbd',
    user:'root',
    pass:''
});

export default db;
