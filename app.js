const fs = require('fs');
const request = require('request');

const DarkSkyKey = fs.readFileSync('./darksky.secret.key').toString();
const url = `https://api.darksky.net/forecast/${DarkSkyKey}/37.8267,-122.4233`; // example url

request({ url, json: true }, (error, response) => {

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
