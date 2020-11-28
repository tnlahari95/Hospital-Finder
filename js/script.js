//Initialise firebase
/*
var firebaseConfig = {
    apiKey: "AIzaSyBLnyguw7cAe3WHjruW6eyZalIwNgw1wBc",
    authDomain: "register-form-8f1a3.firebaseapp.com",
    databaseURL: "https://register-form-8f1a3.firebaseio.com",
    projectId: "register-form-8f1a3",
    storageBucket: "register-form-8f1a3.appspot.com",
    messagingSenderId: "302956715197",
    appId: "1:302956715197:web:7404647b64ed0db73f2bd4",
    measurementId: "G-FBZ2YCV6N1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //Reference email collection
  var messagesRef = firebase.database().ref();

*/

//login-register page
document.getElementById("register-form").addEventListener('submit', submitform);

//submit form
function submitform(e){
    e.preventDefault();
    //Get values
    var email = getInputVal('emailid');
    var password = getInputVal('password');
    var number = getInputVal('mobile number');

    saveMessage(email, password, number);

    //show alert
    document.querySelector('.alert').style.display= 'block';
        //hide alert after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').style.display='none';
        }, 3000);//3 sec
    document.getElementById('register-form').reset();

}
//function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save data to firebase
function saveMessage(email, password, number){
    var newdataRef = messagesRef.push();
    newdataRef.set({
        email: email,
        password: password,
        number: number
    });
}

//loadDoc()



//sub-pages link in the services.html
function myFunction1() 
{
    window.location.assign("generalawareness.html");

}
function myFunction2() 
{
window.location.assign("hospitalfinder.html");

}
function myFunction3() 
{
window.location.assign("covidMetrics.html");

}





