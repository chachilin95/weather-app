const geocode = require('./api/mapbox').geocode;

geocode('Dallas, TX', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
    console.log(data.location);
});
