const { geocode } = require('./api/mapbox');
const { forecast } = require('./api/darksky');

const location = process.argv[2];
geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
        return console.log(error);
    }

    forecast({ latitude, longitude }, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log(forecastData);        
    });
    
});