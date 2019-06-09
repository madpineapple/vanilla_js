const express = require('express');
const mysql = require('mysql');

//Create connections
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database: 'userpassdb'
});

//Connect to database
db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('MySql Connected!')
});
const app = express();

//Create db
app.get('/createdb', (req, res)=> {
  let sql = 'CREATE DATABASE userpassdb';
  db.query(sql, (err , result) => {
    if(err) throw err;
    res.send('database created');
  });
});

//Create tables
app.get('/createusertable', (req, res)=>{
  let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, user VARCHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, result)=>{
    if(err) throw err;
    res.send('table created')
  })
});

//insert data into the user tables
app.get('/adduser2', (req,res)=>{
  let users = {user:'Vistor.Stone', password:'Cyborg',email:'detroit@hero.com'};
  let sql = "INSERT INTO users SET ?";
  let query = db.query(sql, users, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send('Data inserted into table');
  });
})

 app.listen('3000', ()=>{
   console.log('Server started on port 3000');
 });

var objUsers = [
  {
    username: "bob",
    password: "dylan"
  },
  {
    username: "dilly",
    password: "dally"
  }
]
function checkMe() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

  for(i = 0; i< objUsers.length;i++){
    if(username == objUsers[i].username && password == objUsers[i].password){
      console.log("correct")
      window.location.href="index.html";
      return
    }
  }alert("Incorrect password! try again")



}
