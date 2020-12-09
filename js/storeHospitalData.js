$(document).ready(function () {

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

  //Reference stored hospital collection
  var userHospitalCollection = firebase.database().ref("userData");

  function storeHospital(id){

    
    var hospNameID = ""
    var bedNumID = ""
    var ICUNumID = ""

    if(id === 1) {
      hospNameID = "#hsone"
      bedNumID = "#nbone"
      ICUNumID = "#icuone"
    } else if(id === 2) {
      hospNameID = "#hstwo"
      bedNumID = "#nbtwo"
      ICUNumID = "#icutwo"
    }

     hospName = $(hospNameID).val()
     bedNum = $(bedNumID).val()
     ICUNum = $(ICUNumID).val()

     currUser = sessionStorage.getItem("currUserEmail")

     dataObj = {
       hospName,
       bedNum,
       ICUNum
     }
     var newSavedHospital = userHospitalCollection.push()
     newSavedHospital.set({
        user: currUser,
        data: dataObj
     })
  }
})