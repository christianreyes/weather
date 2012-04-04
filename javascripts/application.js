$(function(){
  // ready function
  navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    $('#latitude').text(latitude);
    $('#longitude').text(longitude);
    
    var uri = "http://forecast.weather.gov/MapClick.php?lat=" + latitude + "&lon=" + longitude + "&FcstType=dwml";
    jQuery.get(uri, function(res){
      $('#weather').text(res.responseText);
    });
  });
});