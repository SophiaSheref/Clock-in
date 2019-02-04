// Initialize Firebase
var config = {
  apiKey: "AIzaSyD0PyX7PiZbdPA28Hzu4ay0JlNn5Syhd7Y",
  authDomain: "auth-f63a2.firebaseapp.com",
  databaseURL: "https://auth-f63a2.firebaseio.com",
  projectId: "auth-f63a2",
  storageBucket: "auth-f63a2.appspot.com",
  messagingSenderId: "175744758821"
};
firebase.initializeApp(config);

var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");
var logOutBtn = document.getElementById("logOutBtn");

signUpBtn.addEventListener("click", function(){
  var emailField = document.getElementById("email").value;
  var passwordField = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
    alert('User Created!!!');
  }).catch(function(error){
    if(error != null){
      console.log(error.message);
      return;
    }
  });
});

signInBtn.addEventListener("click", function(){
  var emailField = document.getElementById("email").value;
  var passwordField = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
    document.location.href = '../src/mainWindow.html';
  }).catch(function(error){
    if(error != null){
      console.log(error.message);
      return;
      }
    });
  });

  logOutBtn.addEventListener("click", function(){
    firebase.auth().signOut().then(function(){
      document.location.href = "./src/login.html";
    });
  });
