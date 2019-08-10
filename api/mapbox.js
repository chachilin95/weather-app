const fs = require('fs');

const apiKey = fs.readFileSync('./keys/mapbox.secret.key').toString();
const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${apiKey}`;

const generateURL = () => {
    return api
};

module.exports = {
    generateURL
};