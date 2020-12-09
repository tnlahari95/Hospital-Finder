
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBVUNLJa609q3GPBUZg9zKakzQuJ1BB7C8",
    authDomain: "hospitalfinder-4ceeb.firebaseapp.com",
    databaseURL: "https://hospitalfinder-4ceeb.firebaseio.com",
    projectId: "hospitalfinder-4ceeb",
    storageBucket: "hospitalfinder-4ceeb.appspot.com",
    messagingSenderId: "558731690799",
    appId: "1:558731690799:web:7d9e3a7dc4920f59b657da",
    measurementId: "G-EHWHX1RYCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");


//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".content").value;
    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message)

    document.querySelector(".contact-form").reset();
}
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    })
}
//contact form validation

function validateForm() {
    var w = document.forms["contact-form"]["name"].value;
    var x = document.forms["contact-form"]["email"].value;
    var y = document.forms["contact-form"]["subject"].value;
    var z = document.forms["contact-form"]["contact-content"].value;
    if (w == "") {
        alert("Name must be filled out");
        return false;
    }
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
    if (y == "") {
        alert("Subject must be filled out");
        return false;
    }
    if (z == "") {
        alert("Email must have a message");
        return false;
    }
}