$(document).ready(function () {
    $('#company-input').on("change", function () {

        var selectedValue = $('#company-input option:selected').val();
        var selectedText = $('#company-input option:selected').text();
        $('#company-input').on("change", function () {
            var value = $(this).val();
            var text = $(this).find('option:selected').text();
        });

        var config = {
            apiKey: "AIzaSyDW7VVTo0QIJkHrYXQX_ywKUBHc44AfXGs",
            authDomain: "rooted-d62ff.firebaseapp.com",
            databaseURL: "https://rooted-d62ff.firebaseio.com",
            projectId: "rooted-d62ff",
            storageBucket: "rooted-d62ff.appspot.com",
            messagingSenderId: "95280005810"
        };
        firebase.initializeApp(config);

        var database = firebase.database();

        $(document).ready(function () {
            $("#submit").click(function () {
                let company = $("#company-input").val();

                console.log("click");

                let newCompany = {
                    company: $("#company-input").val()
                };

                console.log(selectedValue);


            });

            // Push to Firebase


            database.ref("/Company").push({
                company: selectedValue, 
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });

            $("#company-input").val();


            "use strict";

            /* 
                
            1. Vars and Inits
                
            */

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

            /* 
                
            2. Set Header
                
            */

            function setHeader() {
                if ($(window).scrollTop() > 127) {
                    header.addClass('scrolled');
                } else {
                    header.removeClass('scrolled');
                }
            };

            /* 
                
            3. Init Menu
                
            */

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

            /* 
                
            4. Init Google Map
                
            */

            function initGoogleMap() {
                var myLatlng = new google.maps.LatLng(30.2672, -97.7431);
                var mapOptions = {
                    center: myLatlng,
                    zoom: 10,
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


            function myFunction() {
                var elmnt = document.getElementById("content");
                elmnt.scrollIntoView();
            }

            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10
                },
                draggable: true,
                map: map
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

    /* 
        
    4. Init Google Map
        
    */

    function initGoogleMap() {
        var myLatlng = new google.maps.LatLng(30.2672, -97.7431);
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
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

//Scroll Feature

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop -  18;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
