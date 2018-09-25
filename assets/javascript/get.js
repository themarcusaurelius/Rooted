$(document).ready(function () {
    /// company 
    
    let google =  "500 W 2nd St, Austin, TX 78701"
    let bumble = "1105 W 41st St, Austin, TX 78756"
    let ibm = "IBM - Building 045, 11400 Burnet Rd, Austin, TX 78758"
    let facebook = "300 W 6th St, Austin, TX 78701"
    let indeed = "6433 Champion Grandview Way, Austin, TX 78750"
    let dell = "319 E Parmer Ln, Austin, TX 78753"
    let apple = "12545 Riata Vista Cir, Austin, TX 78727"
    let homeAway = "1011 W 5th St #300, Austin, TX 78703"
    let intel = "1300 S MoPac Expy, Austin, TX 78746"
    let amazon = ""
     
     
  
    let address =""
     let search = "https://maps.googleapis.com/maps/api/geocode/json?address="+apple+"&key=AIzaSyB5HFzXQptYixSzoZ8BjUGLQfVPTnKTbhw";
      $.get({
        url: search,
        method: "GET"
      })
      .then(function(response) {
       
   let coordinates = JSON.parse(response.results[0].geometry)
    //console.log(mapsRes)
      console.log(coordinates);
      return coordinates
     })
  
     
  //console.log(coordinates)
  
     //let latitude = response.results[0].geometry.location.lat
       //let longitude = response.results[0].geometry.location.lng
     //console.log(latitude)
    $.get({
     url: "https://api.stay22.com/v2/hotelscombined?latitude=30.2660754&longitude=-97.7495642&radius=3000&checkin=2018-10-10&checkout=2018-10-14&minprice=0&maxprice=2000&language=en&currency=CAD&guests=2&rooms=1&limit=25&page=1",
     lat: 30.43247,
     lng: -97.73596959999999,
     method: "GET"
  })
  .then(function(data){
   for (i = 0; i < data.results.length; i++){
      console.log(data.results[i].name)
      console.log(data.results[i].max_rates)
      console.log(data.results[i].link)
      $("#results").append("<div id= places>")
      $("#places").append("")
  
  
    
  
   }
  
   console.log(data);
  })
  })