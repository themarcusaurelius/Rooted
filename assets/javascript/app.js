$(document).ready(function () {

   // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDW7VVTo0QIJkHrYXQX_ywKUBHc44AfXGs",
        authDomain: "rooted-d62ff.firebaseapp.com",
        databaseURL: "https://rooted-d62ff.firebaseio.com",
        projectId: "rooted-d62ff",
        storageBucket: "rooted-d62ff.appspot.com",
        messagingSenderId: "95280005810"
    };
    firebase.initializeApp(config);

    window.firebaseAuth = firebase.auth;

    ////////////////////////////////////////////////////////////////////////////////////
    var database = firebase.database();

    $('#company-input').on("change", function () {

        var selectedValue = $('#company-input option:selected').val();
        var selectedText = $('#company-input option:selected').text();
        $('#company-input').on("change", function () {
            var value = $(this).val();
            var text = $(this).find('option:selected').text();
        })

        $("#submit").click(function () {
            let company = $("#company-input").val();

            console.log("click");

            let newCompany = {
                company: $("#company-input").val()
            };

            console.log(selectedValue);
        })


        // Push to Firebase
        database.ref("/Company").push({
            company: selectedValue,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        $("#company-input").val().trim();
        console.log(selectedValue);


        //HEADER and MENU FUNCTIONS

        var header = $('.header');
        var menu = $('.menu');
        var menuActive = true;
        var map;

        setHeader();

        $(window).on('resize', function () {
            setHeader();

            setTimeout(function () {
                $(window).trigger('resize.px.parallax');
            }, 375);
        });

        $(document).on('scroll', function () {
            setHeader();
        });

        initMenu();
        initGoogleMap();


        ///////////////Set Header\\\\\\\\\\\\\\\\

        function setHeader() {
            if ($(window).scrollTop() > 127) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
        };


        ///////////////Set Menu\\\\\\\\\\\\\\\\\

        function initMenu() {
            if ($('.hamburger').length && $('.menu').length) {
                var hamb = $('.hamburger');
                var close = $('.menu_close_container');

                hamb.on('click', function () {
                    if (!menuActive) {
                        openMenu();
                    } else {
                        closeMenu();
                    }
                });

                close.on('click', function () {
                    if (!menuActive) {
                        openMenu();
                    } else {
                        closeMenu();
                    }
                });


            }
        }

        function openMenu() {
            menu.addClass('active');
            menuActive = true;
        }

        function closeMenu() {
            menu.removeClass('active');
            menuActive = false;
        }

        ///////////////Google Map\\\\\\\\\\\\\\\\
        function initGoogleMap() {
            var myLatlng = new google.maps.LatLng(30.2672, -97.7431);

            var mapOptions = {
                center: myLatlng,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                draggable: true,
                scrollwheel: true,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: true,
                fullscreenControl: true,
                styles: [{
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffeba1"
                    }]
                }]
            }

            // Initialize a map with options
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // Re-center map after window resize
            google.maps.event.addDomListener(window, 'resize', function () {
                setTimeout(function () {
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(myLatlng);
                }, 1400);
            });
        }
        
///////////////////////
        var map;

        var markerData = [{
                lat: 30.401081,
                lng: -97.719290,
                zoom: 18,
                name: "Amazon"
            },
            {
                lat: 30.432487,
                lng: -97.735995,
                zoom: 14,
                name: "Apple"
            },
            {
                lat: 30.309885,
                lng: -97.742205,
                zoom: 14,
                name: "Bumble"
            },
            {
                lat: 30.488424,
                lng: -97.670435,
                zoom: 14,
                name: "Dell"
            },
            {
                lat: 30.269091,
                lng: -97.745817,
                zoom: 14,
                name: "Google"
            },
            {
                lat: 30.404769,
                lng: -97.721534,
                zoom: 14,
                name: "Homeaway"
            },
            {
                lat: 30.393951,
                lng: -97.724021,
                zoom: 14,
                name: "IBM"
            },
            {
                lat: 30.363058,
                lng: -97.793808,
                zoom: 14,
                name: "Indeed"
            },
            {
                lat: 30.262696,
                lng: -97.793318,
                zoom: 14,
                name: "Intel"
            },
        ];

        var value = $('#company-input option:selected').val();

        for (i = 0; i < markerData.length; i++) {
            if (value === markerData[i].name) {
                var specLat = (markerData[i].lat)
                var specLong = (markerData[i].lng)
                var myNewLatlng = new google.maps.LatLng(specLat, specLong);
                map.setCenter(myNewLatlng)
            }

        }

        function initialize() {
            map = new google.maps.Map(document.getElementsByClassName('map'), {
                zoom: 3,
                center: {
                    lat: 10,
                    lng: 10
                }
            });
            markerData.forEach(function (data) {
                var newmarker = new google.maps.Marker({
                    map: map,
                    position: {
                        lat: data.lat,
                        lng: data.lng
                    },
                    title: data.name
                });
                $(".search_form_select1").append('<option value="' + [data.lat, data.lng, data.zoom].join('|') + '">' + data.name + '</option>');
            });

        }

        google.maps.event.addDomListener(window, 'load', initialize);

        $(document).on('change', 'search_form_select1', function () {
            var latlngzoom = $(this).val().split('|');
            var newzoom = 1 * latlngzoom[2],
                newlat = 1 * latlngzoom[0],
                newlng = 1 * latlngzoom[1];
            map.setZoom(newzoom);
            map.setCenter({
                lat: newlat,
                lng: newlng
            });
        });



        function myFunction() {
            var elmnt = document.getElementById("content");
            elmnt.scrollIntoView();
        }

        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: {
                path: google.maps,
                scale: 10
            },
            draggable: true,
            map: map

        });

        markerData.forEach(function (data) {
            var newmarker = new google.maps.Marker({
                map: map,
                position: {
                    lat: data.lat,
                    lng: data.lng
                },
                title: data.name
            });
            jQuery("#selectlocation").append('<option value="' + [data.lat, data.lng, data.zoom].join('|') + '">' + data.name + '</option>');

        });

        ///////////////Database Quieries\\\\\\\\\\\\
        let company =[
            {name: "google",  
            location:"500 W 2nd St, Austin, TX 78701"},
            {name: "bumble",
            location:"1105 W 41st St, Austin, TX 78756"},
            {name:"ibm",
            location:"Building 045, 11400 Burnet Rd, Austin, TX 78758"},
            {name:"facebook", 
            location:"300 W 6th St, Austin, TX 78701"},
            {name:"indeed", 
            location: "6433 Champion Grandview Way, Austin, TX 78750"},
            {name:"dell", 
            location: "319 E Parmer Ln, Austin, TX 78753"},
            {name:"apple",  
            location:"12545 Riata Vista Cir, Austin, TX 78727"},
            {name:"homeAway", 
            location: "1011 W 5th St #300, Austin, TX 78703"},
            {name:"intel", 
            location: "1300 S MoPac Expy, Austin, TX 78746"},
            {name:"amazon", 
            location: ""}, 
            ]
            
            let search = "https://maps.googleapis.com/maps/api/geocode/json?address="+"500 W 2nd St, Austin, TX 78701"+"&key=AIzaSyB5HFzXQptYixSzoZ8BjUGLQfVPTnKTbhw";
            // function companyData(){
            //function getLatLng(){
            
                $.get({
                  url: search,
                  method: "GET"
                })
                .then(function(response) {
                  let latitude = response.results[0].geometry.location.lat
                  let longitude = response.results[0].geometry.location.lng
                  ///////////
                  
                  let coordinates = JSON.stringify(response.results[0].geometry.lat)
                  
                  console.log(response);
                  console.log(coordinates)
                 
                  console.log(latitude)
                  
                    $.get({
                      url: "https://api.stay22.com/v2/hotelscombined?latitude="+latitude+"&longitude="+longitude+"&radius=3000&checkin=2018-10-10&checkout=2018-10-14&minprice=0&maxprice=2000&language=en&currency=CAD&guests=2&rooms=1&limit=25&page=1",
                      lat: latitude,
                      lng: longitude,
                      method: "GET"
                    })
              
                    .then(function(data){
                      console.log(data);
                      for (i = 0; i < data.results.length; i++){ 
                      
                        //console.log(data.results[i].images[1])
                        $(".return-results").append(`
                          <a href="${data.results[i].rooms[0].link}"><h3 class ="name">${data.results[i].name}</h3></a>
                          
                          <h4 class = "cost">$${data.results[i].max_rates.per_night}</h4>
                          <h5 class = link>${data.results[i].rooms[0].link}</h5>`)
                            console.log(data.results[i].name)
                            console.log(data.results[i].max_rates.per_night)
                            console.log(data.results[i].link)
                            console.log(data);
                      }
                    })  
                })

       
    

///////////////////User Login\\\\\\\\\\\\\\\\\\\
   const inputEmail = document.getElementById('inputEmail');
   const inputPassword = document.getElementById('inputPassword');
   const buttonLogin = document.getElementById('buttonLogin');
   const buttonCreate = document.getElementById('buttonCreate');
   const buttonLogOut = document.getElementById('buttonLogOut');

   //login event

   buttonLogin.addEventListener('click', e => {
       //get email and password
       const email = inputEmail.value;
       const password = inputPassword.value;
       const authorize = firebase.auth();
       //Sign in
       const entry = authorize.signInWithEmailAndPassword(email, password);
       entry.catch(e => console.log(e.message));

   });

   buttonCreate.addEventListener('click', e => {
       //get email and password
       const email = inputEmail.value;
       const password = inputPassword.value;
       const authorize = firebase.auth();
       //Sign in
       const entry = authorize.createUserWithEmailAndPassword(email, password);
       entry.catch(e => console.log(e.message));
   });


   buttonLogOut.addEventListener('click', e => {
       firebase.auth().signOut();
   });


   firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
           console.log(firebaseUser);
           buttonLogOut.classList.remove('hide');
             // User is signed in.

       }

       else {
           console.log("not logged in");
           buttonLogOut.classList.add('hide');
             // User is not logged in.
       }
   });

   var user = firebase.auth().currentUser;

   console.log(user);

});
});