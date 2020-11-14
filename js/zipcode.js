 // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          var firebaseConfig = {
            apiKey: "AIzaSyAet0hrfH3pIi8GoR3q6pVlrsfS3EIyXBI",
            authDomain: "inputdata-b5a96.firebaseapp.com",
            databaseURL: "https://inputdata-b5a96.firebaseio.com",
            projectId: "inputdata-b5a96",
            storageBucket: "inputdata-b5a96.appspot.com",
            messagingSenderId: "235070617092",
            appId: "1:235070617092:web:46ea1338a33f80dcade751",
            measurementId: "G-1Q5C8P5KGD"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
       // firebase.analytics();

    function getdata(){
    
    var user = document.getElementById("demo").value;
    //path of the data and .once will get all the data in one time
    
    firebase.database().ref('user/'+user).on('value', snapshot =>{

        var cases = snapshot.val().cases;
        console.log(cases);
        var population = snapshot.val().population;
        var deaths = snapshot.val().deaths;
        var recovered = snapshot.val().recovered;

        document.getElementById("cases").innerHTML = cases;
        document.getElementById("population").innerHTML = population;
        document.getElementById("deaths").innerHTML = deaths;
        document.getElementById("recovered").innerHTML = recovered;
    }) 
    }