const fs = require('fs');
const request = require('request');

const apiKey = fs.readFileSync('./keys/darksky.secret.key').toString();

const generateURL = ({ latitude, longitude }) =>  (
    `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`
);

const forecast = (location, callback) => {
    const url = generateURL(location);

    request({ url, json: true }, (error, response) => {    
        
        if (error) {
            return callback('Unable to connect to weather service.', undefined);
        } else if (error = response.body.error) {
            return callback(error, undefined);
        }

        const { currently, daily } = response.body;
        const temperature = currently.temperature;
        const precipitation = currently.precipProbability;
        const todaySummary = daily.data[0].summary;
        
        callback(
            undefined,
            `${todaySummary} It is currently ${temperature} degrees out. There is a ${precipitation}% chance of rain`
        );
        
    });
};

module.exports = {
    forecast
};