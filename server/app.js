const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

const bcrypt = require("bcrypt");
const saltRounds = 10;


const db = mysql.createConnection({
  host: process.env.HOST ,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE ,
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO employee (account, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
app.post("/login", (req, res) => {
    
    const account = req.body.account;
    const password = req.body.pass;
    console.log(account +"app");
    console.log(password);
  
    db.query(
        
      "select * from employee where account=? ;  ",
      account, 
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus({err: err});
        } 
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              console.log("logedin");
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    );
  });



  app.listen(3002, () => {
    console.log("Yey, your server is running on port 3002");
  });