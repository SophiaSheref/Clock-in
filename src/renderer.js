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

//Get elements
var signUpBtn = document.getElementById('signUpBtn');
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');

//Add sign up event
if(signUpBtn){
signUpBtn.addEventListener('click', function(){
  var emailField = document.getElementById('email').value;
  var passwordField = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
    alert('User Created!!!');
  }).catch(function(error){
    if(error != null){
      console.log(error.message);
      return;
      }
    });
  });
}

//Add login event
if(loginBtn){
loginBtn.addEventListener('click', function(){
  var emailField = document.getElementById('email').value;
  var passwordField = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
    document.location.href = 'mainWindow.html';
  }).catch(function(error){
    if(error != null){
      console.log(error.message);
      return;
      }
    });
  });
}

//Add logout event
if(logoutBtn){
  logoutBtn.addEventListener('click', function(){
    firebase.auth().signOut().then(function(){
      console.log('logged out!!!');
      document.location.href = 'login.html';
    }).catch(function(error) {
      if(error != null){
      console.log(error.message);
      return;
      }
    });
  });
}
