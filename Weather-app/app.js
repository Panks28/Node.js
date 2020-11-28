const forecast= require ('./forecast.js');
const geocode = require('./geocode.js');
// const urlWeather = "http://api.weatherstack.com/current?access_key=02f7331dce03914997c71ab0abe5c81d&query=31.0802042,77.1609095"
// const urlCoordinates = "https://api.mapbox.com/geocoding/v5/mapbox.places/Chandigarh%20India.json?access_token=pk.eyJ1IjoicGFua3MyOCIsImEiOiJja2h6NnMybTAwN3d6MnNxa2pmejAzYTlzIn0.Oh8LfpqP8ABDi1l-j976EQ&limit=1";

// request ({ url:urlWeather, json: true}, (error, response) => {

//     if (error) {

//         console.log ("Unable to connect to the weather service")

//     } else if (response.body.error) {

//         console.log("Unable to find location! Error Code: " + response.body.error.code +
//         " & Error Type: " + response.body.error.type);

//     } else {
    
//     console.log("It is currently " + response.body.current.temperature + " degrees in " + response.body.location.name +", " + response.body.location.region +
//      ". " + "It feels like " +  response.body.current.feelslike + " degrees out.") 
//     }

// });


// request ({url: urlCoordinates, json: true}, (error, response) => {

//     if (error) {

//         console.log("Unable to connect to the Geolocation service!")
//     } else if (response.body.message === "Not Found") {

//         console.log("No match(es) for your search")

//     } else {

//     console.log("Latitude: " + response.body.features[0].geometry.coordinates[1]
//      + ", Longitude: " + response.body.features[0].geometry.coordinates[0]);
//     }

// });

const userInput = process.argv;

if (!userInput[2]) {
    return console.log ("Please provide a location name!!")
}

else {
geocode(userInput[2], (error, data) => {

    if (error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, callback = (error, forecastData) => {

        if (error) {
            return console.log(error)
        }

        console.log(data.Location);
        console.log(forecastData);
        
    });
});
};
