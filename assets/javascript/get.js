$(document).ready(function () {
    /// company 
        
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
       // }
      //}
    //})
})