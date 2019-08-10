const { geocode } = require('./api/mapbox');
const { forecast } = require('./api/darksky');

const location = process.argv[2];
geocode(location, (error, geocodeData) => {
    if (error) {
        return console.log(error);
    }
    
    const { latitude, longitude } = geocodeData;

    forecast({ latitude, longitude }, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(geocodeData.location);
        console.log(forecastData);        
    });
    
});