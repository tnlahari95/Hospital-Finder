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

    function getdata() {

        var user = document.getElementById("demo").value;
        //path of the data and .once will get all the data in one time

        firebase.database().ref('user/' + user).on('value', snapshot => {

            var cases = snapshot.val().cases;

            var population = snapshot.val().population;
            var deaths = snapshot.val().deaths;
            var recovered = snapshot.val().recovered;

            var hsone = snapshot.val().hsone;
            var nbone = snapshot.val().nbone;
            var icuone = snapshot.val().icuone;

            var hstwo = snapshot.val().hstwo;
            var nbtwo = snapshot.val().nbtwo;
            var icutwo = snapshot.val().icutwo;


            document.getElementById("cases").innerHTML = cases;
            document.getElementById("population").innerHTML = population;
            document.getElementById("deaths").innerHTML = deaths;
            document.getElementById("recovered").innerHTML = recovered;

            document.getElementById("hsone").innerHTML = hsone;
            document.getElementById("nbone").innerHTML = nbone;
            document.getElementById("icuone").innerHTML = icuone;

            document.getElementById("hstwo").innerHTML = hstwo;
            document.getElementById("nbtwo").innerHTML = nbtwo;
            document.getElementById("icutwo").innerHTML = icutwo;


        })
        // Create the map.



        var geocoder = new google.maps.Geocoder();
        var address = user;

        geocoder.geocode({ 'address': 'zipcode '+address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();


            }
            this.lat=lat;
            this.lng=lng;

            var map;

            var chicago = {
                lat,
                lng
            };
            if (navigator.geolocation) {
                try {
                    navigator.geolocation.getCurrentPosition(function (position) {
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
                function (results, status, pagination) {
                    if (status !== 'OK') return;

                    createMarkers(results);
                    getNextPage = pagination.hasNextPage && function () {
                        pagination.nextPage();
                    };
                });


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

        });

        }








