const fs = require('fs');

const apiKey = fs.readFileSync('./keys/darksky.secret.key').toString();
const api = `https://api.darksky.net/forecast/${apiKey}`;

const generateURL = () => {
    return api + '/37.8267,-122.4233'
};

module.exports = {
    generateURL
};