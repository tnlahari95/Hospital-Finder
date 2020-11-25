//Initialise firebase
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


// Initialize and add the map
var map;

function initMap() {
    // Create the map.
    var chicago = {
        lat: 41.881832,
        lng:  -87.623177
    };
    if (navigator.geolocation) {
        try {
            navigator.geolocation.getCurrentPosition(function(position) {
                var chicago = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        } catch (err) {

        }
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: chicago,
        zoom: 17
    });

    // Create the places service.
    var service = new google.maps.places.PlacesService(map);

    // Perform a nearby search.
    service.nearbySearch({
            location: chicago,
            radius: 4000,
            type: ['hospital']
        },
        function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
            };
        });
}

function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });
        bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}