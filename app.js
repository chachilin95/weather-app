const request = require('request');
const DarkSky = require('./api/darksky');
const MapBox = require('./api/mapbox');

const weatherURL = DarkSky.generateURL();
const geocodingURL = MapBox.generateURL();

request({ url: weatherURL, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service.');
    } else if (error = response.body.error) {
        console.log(error);
    } else {
        const { currently, daily } = response.body;
        const temperature = currently.temperature;
        const precipitation = currently.precipProbability;
        const todaySummary = daily.data[0].summary;
    
        console.log(
            todaySummary,
            `It is currently ${temperature} degrees out. There is a ${precipitation}% chance of rain`
        );
    }
});

request({ url: geocodingURL, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to location services.');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location, try another search term');
    } else {
        const [ longitude, latitude ] = response.body.features[0].center;    
        console.log(latitude, longitude);
    }
});
