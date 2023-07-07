const express = require('express');
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mysql = require('mysql');
const cors = require('cors')
const db = require("./config/db");

const app = express()
app.use(cors());
app.use(express.json());
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: true })
// const registrationRoute = require("./routes/registration");

// app.use('/',registrationRoute);

app.post('/signup', urlencodedParser,async(req,res)=>{
    try{
        var sql = "INSERT INTO registration (`first_name`,`last_name`, `email`,`phon_number`, `password`, `gender`, `address` ) VALUES (?)";
        const values = [req.body.first_name, req.body.last_name, req.body.email,req.body.phon_number,req.body.password,req.body.gender, req.body.address];
        console.log("values:-",req.body.phon_number);
        console.log("values999:-",(values));
        if(!values){
          res.status(401).send("All fields are required");  
        }else{
        db.query(sql,[values],(err, data)=>{
        if(err){
            console.log("err:-",err);
            return res.json(console.log("error:-",err));
        }
        return res.json(console.log("data:-",data));
    })
}

    } catch(error){
       console.log("error:-",error);
       console.log("error in response route");
    }
    
})

app.post('/login',urlencodedParser,async(req,res)=>{
    const sql = "SELECT * FROM registration WHERE `email` = ?  AND `password` = ? ";
    const values = [req.body.email, req.body.password];
    db.query(sql,[values],(err, data)=>{
        if(err){
            console.log("err:-",err);
            return res.json(console.log("error:-",err));
        }
        return res.json(console.log("data:-",data));
})
})

app.listen(4000,()=>{
    console.log("listning .....")
})