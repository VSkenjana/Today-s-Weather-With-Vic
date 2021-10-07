"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=sheffield&APPID=4ea99307255008e410d1a3470442a91b"

$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);

        // Output the location 
        let displayCity = 'Current weather in ${result.name}';
        $("#location").text(result.name);

        // display the temperature
        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let Fahrenheit = F.toString();

      

        let displayTemp = 'Temperature: ${F}&#176;F';
        $("#temperature").text(Fahrenheit);

        // display the wind speed. JQuery syntax included
        let windSpeed = Math.round(result.wind.speed / .44704);
        let wind = windSpeed.toString();
        $("#wind").text(wind)

        // Display sky condition 
        $("#sky").text(result.weather[0].description);


    }
   

})