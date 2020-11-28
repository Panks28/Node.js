const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const weatherURL = "http://api.weatherstack.com/current?access_key=02f7331dce03914997c71ab0abe5c81d&query=" + latitude + "," + longitude;

    request({url:weatherURL, json:true}, (error,response) => {

        if (error) {

            callback("Unable to Connect to the Weather Services!", undefined)

        } else if (response.body.error) {
            callback("Unable to identify the coordinates. Error Cod: " + response.body.error.code + "Erro Type: " + resposne.body.error.type, undefined)

        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            });
        };
    });
};


module.exports = forecast