const request = require('request');
const DarkSky = require('./api/darksky');
const MapBox = require('./api/mapbox');

const mbURL = MapBox.generateURL();
const dsURL = DarkSky.generateURL();

request({ url: dsURL, json: true }, (error, response) => {

    if (error) {
        console.log(error);
        return;
    }

    const { currently, daily } = response.body;
    const temperature = currently.temperature;
    const precipitation = currently.precipProbability;
    const todaySummary = daily.data[0].summary;

    console.log(
        todaySummary,
        `It is currently ${temperature} degrees out. There is a ${precipitation}% chance of rain`
    );
});

request({ url: mbURL, json: true }, (err, response) => {
    const { features } = response.body;
    const [ longitude, latitude ] = features[0].center;

    console.log(latitude, longitude);
});
