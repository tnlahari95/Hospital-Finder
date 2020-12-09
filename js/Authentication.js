$(document).ready(function(){

var firebaseConfig = {
    apiKey: "AIzaSyB7vEiONHqd6MsYoI0mbKwfDzwKckSat-I",
    authDomain: "logregform-db3a5.firebaseapp.com",
    databaseURL: "https://logregform-db3a5.firebaseio.com",
    projectId: "logregform-db3a5",
    storageBucket: "logregform-db3a5.appspot.com",
    messagingSenderId: "580598663799",
    appId: "1:580598663799:web:3ddcd2827b90fd51e99472",
    measurementId: "G-MYNQ011DQ1"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function register(){
  const email = $('#emailid').value;
  const password = document.getElementById('password');
  auth.createUserWithEmailAndPassword(email.value, password.value).then(function(data){
    console.log(data.user.email)
    sessionStorage.setItem("currUserEmail", data.user.email)
    window.location.replace("hospitalfinder.html")
  }).catch(function(error){
    console.log(error)
  }); 
}

function login(){
var email = document.getElementById('emailid');
var password = document.getElementById('password');
auth.signInWithEmailAndPassword(email.value, password.value).then(function(data){
  console.log(data.user.email)
  sessionStorage.setItem("currUserEmail", data.user.email)
  window.location.replace("hospitalfinder.html")
}).catch(function(error){
  console.log(error)
});
}

function hideLogin(){
  if(sessionStorage.getItem("currUserEmail")) {
    $("LoginBar").css("display", "none")
    $("userBar").css("display", "block")
    $("userDisplay").value(sessionStorage.getItem("currUserEmail"))
  } else {
    $("LoginBar").css("display", "block")
    $("user-bar").css("display", "none")
  }
}


hideLogin()
})