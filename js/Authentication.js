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

   /* var email = document.getElementById('emailid');
    var password = document.getElementById('password');
    var login = document.getElementById('login');
    var register = document.getElementById('register');

   login.addEventListener('click', e =>{
        var email = email.value;
        var password = password.value;
        var auth = firebase.auth();

        var promise = auth.CreateUserWithEmailAndPassword(email.value, password.value);
        promise.catch( e => console.log(e.message));
        window.alert("Registered");
    });
});*/

const auth = firebase.auth();

function register(){
  const email = document.getElementById('emailid');
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