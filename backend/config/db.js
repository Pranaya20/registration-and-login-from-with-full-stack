
const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"client"
})

db.connect(function(err){
    if(err) throw err;
    console.log("err:-",err);
    console.log("Database is connected successfully");
})

module.exports = db;
