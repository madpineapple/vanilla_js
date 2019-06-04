
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
