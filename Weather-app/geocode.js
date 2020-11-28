const request = require('postman-request');

const geocode = (address, callback) => {
    
    const locationURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/%22"+ address + ".json?access_token=pk.eyJ1IjoicGFua3MyOCIsImEiOiJja2kxNjR2cjAzNngzMnhremlpZ2FnOTFvIn0.-gSZX1bTTuskcOybVCnjaw&limit=1";

    request({ url: locationURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log(callback (undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                Location: response.body.features[0].place_name
            }));           
        };
    });
};

module.exports = geocode;