const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const pdf = require('html-pdf');

const pdfTemplate = require('./documents');

const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require("bcrypt");
const saltRounds = 10;


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const jwt = require('jsonwebtoken');


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

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
      if(err) {
          res.send(Promise.reject());
      }

      res.send(Promise.resolve());
  });
});

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})


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
              console.log('inserted');
              res.send(result);
            }
          );
        } else {
              res.send({ message: "email was not found" });
        }
      }
    );
  });
});
app.post('/responsable', (req, res) => {
  const userfil=req.body.userfil;
  db.query(
    "select * from pfe where filiere=? ; ",
    userfil, 
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus({err: err});
      } else if (result.length>0){
        res.send(result);
      } 
    }
  )
  
})
app.post('/coordinateur', (req, res) => {
  const userfil=req.body.userfil;
  db.query(
    "select * from pfe where filiere=? ; ",
    userfil, 
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus({err: err});
      } else if (result.length>0){
        res.send(result);
      } 
    }
  )
  
})
app.post('/convention' , (req, res) =>{
  const username=req.body.username;
  const userfil=req.body.userfil;
  const entreprise= req.body.entreprise;
  const entreprisead=req.body.entreprisead;
  const entreprisrepresenter=req.body.entreprisrepresenter;
  const entreprisRepresenterJob=req.body.entreprisRepresenterJob;
  const pfedatedeb=req.body.pfedatedeb;
  const pfedatedfin=req.body.pfedatedfin;
  const encadrant= req.body.encadrant;
  const encadrantjob= req.body.encadrantjob;
  const encadranttel= req.body.encadranttel;
  const encadrantemail= req.body.encadrantemail;
  const coordinateur= req.body.coordinateur;
  const sujet= req.body.sujet;
  const descriptif= req.body.descriptif;
  console.log('database');
  db.query(
        
    "insert into pfe values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ; ",
    [username,userfil,entreprise,entreprisead,entreprisrepresenter,entreprisRepresenterJob,pfedatedeb,pfedatedfin,encadrant,encadrantjob,encadranttel,encadrantemail,coordinateur,sujet,descriptif], 
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus({err: err});
      } else {
        console.log('good insert done');
      }
    }
  );
  db.query(
        
    "select * from entreprise where nom_entreprise=? ; ",
    entreprise, 
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus({err: err});
      } else if (result.length==0){
        db.query(
        
          "insert into entreprise values(?,?,?,?); ",
          [entreprise,entreprisead,entreprisrepresenter,entreprisRepresenterJob], 
          (err, result) => {
            if (err) {
              console.log(err);
              res.sendStatus({err: err});
            } else if (result.length>0){
              console.log('good insert done entreprise');
            }
          }
        );
      } 
    }
  );
})


app.post('/get-convention', (req, res) => {
  const username=req.body.username;
  db.query(
    "select * from pfe where nom_etudiant=? ; ",
    username, 
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus({err: err});
      } else if (result.length>0){
        res.json({result: result[0]});
      } 
    }
  )
  
})


/*
app.get("/login", (req, res) =>{
  req.session.user = solution;
  if (req.session.user) {
    console.log('work');
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    console.log('work2');
    res.send({ loggedIn: false });
  }
});
*/
const verifyJWT = (req,res,next)=> {
  const token = req.headers["x-access-token"]

  if (!token) {
    res.send("need a token ")
  }else{
    jwt.verify(token,"jwtSecret" , (err, decoded) =>{
      if(err) {
        res.json({auth: false, message: "failed auth"});
      }else{
        req.userId = decoded.id;
        next();
        console.log('verified');
      }
    })
  }
}

app.get('/isUserAuth' ,verifyJWT ,(req,res)=> {
  db.query(
                
    "select * from account where id=? ",
    req.userId,
    (err, result) => {
      if (err) {
        console.log(err);
        res.json({auth:false});
      } else {
        console.log('pass get auth');
        console.log(result);
        const type=result[0].type;
        db.query(
                
          "select * from " +type+" where email=? ",
          result[0].email,
          (err, result) => {
            if (err) {
              console.log(err);
              console.log('err 2');
            } else {
              console.log(result[0]);
              res.json({auth:true, result: result[0] , type: type })
            }
          }
        ); 
      }
    }
  );
  
})



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
              req.session.user = result;
              console.log("logedin");
              
              const id = result[0].id
              const token = jwt.sign({id}, "jwtSecret", {
              expiresIn:6000,
              });
              res.json({auth:true, token: token, result: result[0], message:"user created successfully!"});
              
               /*res.send(result);*/
               /*
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
              ); */
            } else {
              res.json({auth:false, message: "Wrong username/password combination!"});
            }
          });
        } else {
          res.json({auth:false, message: 'no user exists'});
        }
      }
    );
  });



  app.listen(3002, () => {
    console.log("Yey, your server is running on port 3002");
  });