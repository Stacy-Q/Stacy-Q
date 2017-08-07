$.ajas({
  type:"GET",
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDaVs3YHM22XiGGN4f9DQZLsGXl1W7U60U',
  success: function(data){
    if (data.status == "OK") {
      console.log(data.results[0].geometry.location.lat);
      // data.results[0].geometry.location.lng;
    // } else {

    // }
  }
})
