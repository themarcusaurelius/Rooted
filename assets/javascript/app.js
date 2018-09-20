$(document).ready(function() {

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
   
"use strict";
  
/* 
  
1. Vars and Inits
  
 */
  
var header = $('.header');
var menu = $('.menu');
var menuActive = true;
var map;
  
setHeader();
  
$(window).on('resize', function()
    {
    setHeader();
  
    setTimeout(function()
    {
        $(window).trigger('resize.px.parallax');
    }, 375);
});
  
$(document).on('scroll', function()
    {
    setHeader();
});
  
initMenu();
initGoogleMap();
  
/* 
  
2. Set Header
  
*/
  
function setHeader() {
    if($(window).scrollTop() > 127)
    {
    header.addClass('scrolled');
    }
     else
    {
    header.removeClass('scrolled');
    }
};
  
/* 
  
3. Init Menu
  
*/
  
function initMenu() {
    if($('.hamburger').length && $('.menu').length)
    {
    var hamb = $('.hamburger');
    var close = $('.menu_close_container');
  
    hamb.on('click', function() {
        if(!menuActive)
        {
        openMenu();
        }
        else
        {
        closeMenu();
        }
    });
  
              close.on('click', function()
              {
                  if(!menuActive)
                  {
                      openMenu();
                  }
                  else
                  {
                      closeMenu();
                  }
              });
  
      
          }
      }
  
      function openMenu()
      {
          menu.addClass('active');
          menuActive = true;
      }
  
      function closeMenu()
      {
          menu.removeClass('active');
          menuActive = false;
      }
  
/* 
  
4. Init Google Map
  
*/
  
function initGoogleMap() {
    var myLatlng = new google.maps.LatLng(30.2672,-97.7431);
    var mapOptions = 
    {
        center: myLatlng,
        zoom: 10 ,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: true,
        scrollwheel: true,
        zoomControl: true,
        zoomControlOptions:
            {
            position: google.maps.ControlPosition.RIGHT_CENTER
            },
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        styles:
              [
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#ffeba1"
                    }
                  ]
                }
              ]
          }
  
// Initialize a map with options
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
// Re-center map after window resize
    google.maps.event.addDomListener(window, 'resize', function() {
        setTimeout(function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter(myLatlng);
            }, 1400);
        });
    }

    function myFunction() {
        var elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
    }
});
