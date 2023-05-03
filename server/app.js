const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rihabtkd",
  database: "webapp",

});
app.post("/worker", (req, res) => {
    
    const account = req.body.account;
    const pass = req.body.pass;
    console.log(account +"app");
    console.log(pass);
  
    db.query(
        
      "select * from employee where account=? AND pass=? ;  ",
      [account, pass]
      /*"select * from employee"*/,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
            console.log("resultfound");
          res.send(result);
        }
      }
    );
  });
  app.get("/reservations", (req, res) => {
    console.log("get inter");
    db.query("SELECT * FROM reservations", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("db connected");
        res.send(result);
      }
    });
  });


  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });