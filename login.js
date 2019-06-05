const express = require('express');
const mysql = require('mysql');

//Create connections
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'K@Lender12',
    database : 'jsSite'
});

//Connect to database
db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('MySql Connected!')
});
const app = express();

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
