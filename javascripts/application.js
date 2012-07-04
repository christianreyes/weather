$(function(){
  // ready function
  navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    $('#latitude').text(latitude);
    $('#longitude').text(longitude);
    
    var uri = "http://ws.geonames.org/findNearByWeatherJSON?lat=" + latitude + "&lng=" + longitude

    $.getJSON(uri, function(data){
      $('#temp').text(Math.round(data.weatherObservation.temperature * 1.8 + 32 , 2 ) + " F");
      $('#condition').text(data.weatherObservation.weatherCondition);
      $('#clouds').text(data.weatherObservation.clouds);
      $('#city').text(data.weatherObservation.stationName);
    });
  });
});