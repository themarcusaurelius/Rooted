$(document).ready(function () {

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
      
      //function findMe(){
          $("#first").click(function () {
              let address = $('#company-input option:selected').val()
              console.log(address)
          
              let search = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyB5HFzXQptYixSzoZ8BjUGLQfVPTnKTbhw";
              
                  
                     $.get({
                      url: search,
                      method: "GET"
                      })
                      .then(function(response) {
                      let latitude = response.results[0].geometry.location.lat
                      let longitude = response.results[0].geometry.location.lng
                      
                      console.log(response); 
                      console.log(latitude)
                      
                          $.get({
                          url: "https://api.stay22.com/v2/hotelscombined?latitude="+latitude+"&longitude="+longitude+"&radius=3000&checkin=2018-10-10&checkout=2018-10-14&minprice=0&maxprice=2000&language=en&currency=CAD&guests=2&rooms=1&limit=25&page=1",
                          lat: latitude,
                          lng: longitude,
                          method: "GET"
                          })
                  
                          .then(function(data){
                          console.log(data);
                          //document.addEventListener("DOMContentLoaded", function(e) {
                              // 1. Edit widget size
                              var settings22 = {
                                width: '80%', // set the width in px or %
                                height: '420px' // set the height in px or %
                              };
                          
                              // 2. Fill out your config here and the rest should work
                              var s22obj = {
                                //aid: 'affiliateid', // your affiliate id for tracking
                                lat: latitude ,
                                lng: longitude ,// full street address or venue name + city
                                currency:USD,

                                checkin: '2018-10-22', // checkin date for their stay in MM/DD/YYYY or ISO 8601 format
                                checkout:jargon,
                                maincolor: '00549E', // your brand color in hex (without the #)
                                markerimage: "https://www.stay22.com/logo.png" // url of your logo or event image (in https)
                              };
                      
                          
                              // Leave this part intact
                              var params22=''; for (var key in s22obj){if (params22){params22 +='&';}params22 +=key + '=' + encodeURIComponent(s22obj[key]);}var div22=document.getElementById('stay22-script'); div22.insertAdjacentHTML('afterend', '<iframe id="stay22-widget" width="' + settings22.width + '" height="' + settings22.height + '" src="' + 'https://www.stay22.com/embed/gm?' + params22 + '" frameborder="0"></iframe>');
                            });
                          
                              if(data.results.length<1){
                                  $(".return-results").append('<h1>No Results</h1>')
                              }
                              else{for (i = 0; i < data.results.length; i++){
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
                      
                          }
                          //})  
                      })
                  })
      






      
          
     
  })