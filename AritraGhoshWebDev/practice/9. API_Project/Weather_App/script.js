$(document).ready(function() {

    // Get location
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        weather(lat, lon);
    }

    function error() {
        console.log('error');
    }

    function weather(lat, lon) {
        console.log(lat, lon);
        var apiKey = config.WEATHER_API_KEY;
        var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    function updateDOM(data) {

        var city = data.name;
        $('#city').html(city);

        var temp = Math.round(data.main.temp);
        $('#temp').html(temp);

        var desc = data.weather[0].description; 
        $('#desc').html(desc);

        var iconCode = data.weather[0].icon;
        var iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        $('#icon').attr('src', iconUrl);
    }

});