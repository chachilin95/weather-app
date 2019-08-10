const fs = require('fs');
const request = require('request');

const apiKey = fs.readFileSync('./keys/mapbox.secret.key').toString();

const generateURL = (place) => {
    const placeURI = encodeURIComponent(place);
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${placeURI}.json?access_token=${apiKey}`
};

const geocode = (place, callback) => {
    const url = generateURL(place);

    request({ url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search term', undefined);
        } else {
            const [longitude, latitude] = response.body.features[0].center;
            const location = response.body.features[0].place_name
            callback(undefined, {
                longitude,
                latitude,
                location
            });
        }
    });
};

module.exports = {
    geocode
};