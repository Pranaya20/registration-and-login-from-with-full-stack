const express = require('express');
const router = express.Router();
const db = require("./config/db");
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

router.post('/register',urlencodedParser,(req,res,next)=>{
    var sql = "INSERT INTO registration (`first_name`,`last_name`, `email`,`phon_number`, `password`, `gender`, `address` ) VALUES (?)";
    const values = [req.body.first_name, req.body.last_name, req.body.email,req.body.phon_number,req.body.password,req.body.gender, req.body.address];
    console.log("values:-",req.body.phon_number);
    console.log("values999:-",(values));
    // console.log(JSON.stringify(dispname));
    db.query(sql,[values],(err, data)=>{
        if(err){
            console.log("err:-",err);
            return res.json(console.log("error:-",err));
        }
        return res.json(console.log("data:-",data));
    })
})

module.exports = router;