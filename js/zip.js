 //used covi-data project 
  
  
  var firebaseConfig = {
    apiKey: "AIzaSyApxKe-MskXHr3tJ-G10th7Brcech6X2j0",
    authDomain: "covid-data-6a3bc.firebaseapp.com",
    databaseURL: "https://covid-data-6a3bc.firebaseio.com",
    projectId: "covid-data-6a3bc",
    storageBucket: "covid-data-6a3bc.appspot.com",
    messagingSenderId: "142350538653",
    appId: "1:142350538653:web:e06ff246cec75b1d8d8174",
    measurementId: "G-WDFN8C0MNQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    //firebase.analytics();

    // Get a reference to the database service
    var db = firebase.database();

    var users = db.ref('covid-data').child('covid-data');

   function getdata(){

    var x = document.getElementById("demo").value;

    var query = users.orderByChild('ZIP Code').equalTo(parseInt(x));
    query.on('value', snap => {
          
            // console.log(snap.key);
            console.log(snap.child('population').val());
            // console.log(Object.keys(snap.val()).length);//converting array to objects and getting their count 
            //console.log(snap.child("ZIP Code");
        /*const covidSnap = Object.entries(snap.val());

            //console.log(covidSnap);
        covidSnap.forEach(element => {
        const allowed = ['Cases - Cumulative', 'Case Rate - Cumulative'];
        const filtered = Object.keys(element[1])
             .filter(key => allowed.includes(key))
             .reduce((obj, key) => {
             obj[key] = element[1][key];
             // console.log()
            return obj;
            }, {});

        
                //console.log(Object.keys(element[1]));
                console.log(filtered);
            var result=JSON.stringify(filtered);
            document.getElementById("demo2").innerHTML= result;
            });
})*/
    });}
    /* console.log(parseInt(x)); */
    /* console.log(typeof parseInt(x)); */
    
  
    /* console.log(query); */
    
    //console.log(users);
    
    // var userId = firebase.auth().currentUser.uid;
    //console.log(userId);
    
    //query.on('value', snap => {
    //console.log(snap.val());
      /* console.log(snap.val().length); */
    //console.log(Object.keys(snap.val()).length);//converting array to objects and getting their count 
    
    /* query2.on('value', snap => {
      console.log(snap.val());
    }) */