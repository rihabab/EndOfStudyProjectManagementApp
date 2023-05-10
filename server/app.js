const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require("bcrypt");
const saltRounds = 10;


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

let solution ;
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }
));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
  key: "userId",
  secret:"pfe",
  resave: false ,
  saveUninitialized : false,
  cookie: {
    expires: 60*60*24,
  },
})
);

const db = mysql.createConnection({
  host: process.env.HOST ,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE ,
});

app.post("/register", (req, res) => {
  const email = req.body.useremail;
  const password = req.body.password;
  const type = req.body.type;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
        
      "select * from "+ type+" where email=? ;  ",
       email,
      (err, result) => {
        if (err) {
          console.log(err);
          console.log("err1");
          res.send({ message: "email was not found" });
        } 
        else if (result.length > 0) {
          db.query(
            "INSERT INTO account (email, password, type) VALUES (?,?,?)",
            [email, hash,type],
            (err, result) => {
              console.log(err);
            }
          );
        } else {
              res.send({ message: "email was not found" });
        }
      }
    );
  });
});




app.get("/login", (req, res) =>{
  req.session.user = solution;
  if (req.session.user) {
    console.log('work');
    res.send({ loggedIn: true, user: solution });
  } else {
    console.log('work2');
    res.send({ loggedIn: false });
  }
});
app.post("/login", (req, res) => {
    
    const email = req.body.email;
    const password = req.body.pass;
    console.log(email +"app");
    console.log(password);
  
    db.query(
        
      "select * from account where email=? ;  ",
      email, 
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus({err: err});
        } 
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              console.log("logedin");
              /*res.writeHead(301, {
                Location: `https://www.youtube.com/watch?v=WDT2TTeav2k/`
              }).end();
              res.redirect("/login");
              res.send(result);*/
               
               res.send(result);
               db.query(
        
                "select * from " +result[0].type+" where email=? ",
                email,
                (err, result) => {
                  if (err) {
                    console.log(err);
                    console.log('err 2');
                  } else {
                    console.log(result[0]);
                    req.session.user = result;
                    solution =req.session.user;
                    console.log(req.session.user);
                    console.log('result 2');
                  }
                }
              ); 
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