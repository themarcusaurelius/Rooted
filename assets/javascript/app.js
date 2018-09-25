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


        // Firebase for the housing criteria form 

        $('#criteria-input').on("change", function () {
            var selectedValue = $('#criteria-input option:selected').val();
            var selectedText = $('#criteria-input option:selected').val();
            $('#criteria-input').on("change", function () {
                var value = $(this).val();
                var text = $(this).find('option:selected').text();
            })

            $("#second").click(function () {
                let criteria = $("#criteria-input").val();

                console.log("click");

                let newCriteria = {
                    criteria: $("#criteria-input").val()
                };

                console.log(selectedValue);

                database.ref("/Criteria").push({
                    price: selectedValue,

                    dateAdded: firebase.database.ServerValue.TIMESTAMP

                });

                $("#criteria-input").val().trim();
                console.log(selectedValue);
            })

        })

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
                zoom: 15,
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

        var map;

        var markerData = [{
                lat: 30.401081,
                lng: -97.719290,
                zoom: 14,
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
                jQuery("#search_form_select1").append('<option value="' + [data.lat, data.lng, data.zoom].join('|') + '">' + data.name + '</option>');
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
            jQuery("search_form_select1").append('<option value="' + [data.lat, data.lng, data.zoom].join('|') + '">' + data.name + '</option>');


        });

        ///////////////Change Google Maps To Selected Company\\\\\\\\\\\\


        ///////////////Scroll Feature\\\\\\\\\\\\\\\\

        window.smoothScroll = function (target) {
            var scrollContainer = target;
            do { //find scroll container
                scrollContainer = scrollContainer.parentNode;
                if (!scrollContainer) return;
                scrollContainer.scrollTop += 1;
            } while (scrollContainer.scrollTop == 0);

            var targetY = 0;
            do { //find the top of target relatively to the container
                if (target == scrollContainer) break;
                targetY += target.offsetTop - 18;
            } while (target = target.offsetParent);

            scroll = function (c, a, b, i) {
                i++;
                if (i > 30) return;
                c.scrollTop = a + (b - a) / 30 * i;
                setTimeout(function () {
                    scroll(c, a, b, i);
                }, 20);
            }
            // start scrolling
            scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
        }




    });

});