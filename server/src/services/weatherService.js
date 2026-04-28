const axios = require('axios');

const getWeatherData = async (city = 'San Francisco') => {

    try {

        const geoResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`, {
            headers: {
                'User-Agent': 'SmartRenewableDashboard/1.0'
            }
        });

        let lat = '37.81021';
        let lon = '-122.42282';

        if (geoResponse.data && geoResponse.data.length > 0) {
            lat = geoResponse.data[0].lat;
            lon = geoResponse.data[0].lon;
        }
        const options = {

            method: 'GET',

            url:
                'https://ai-weather-by-meteosource.p.rapidapi.com/time_machine',

            params: {

                lat: lat,

                lon: lon,

                date: '2021-08-24',

                units: 'auto'
            },

            headers: {

                'x-rapidapi-key':
                    process.env.RAPID_API_KEY,

                'x-rapidapi-host':
                    process.env.RAPID_API_HOST,

                'Content-Type':
                    'application/json'
            }
        };

        const response = await axios.request(options);

        const weatherData = response.data.data[0];

        return {

            date: weatherData.date,

            temperature: weatherData.temperature,

            humidity: weatherData.humidity,

            weather: weatherData.summary,

            cloudCover: weatherData.cloud_cover,

            windSpeed: weatherData.wind.speed,

            windDirection: weatherData.wind.dir,

            precipitation:
                weatherData.precipitation.total
        };

    } catch (error) {

        console.error(

            'WEATHER API ERROR:',

            error.response?.data || error.message
        );

        throw new Error('Failed to fetch weather data');
    }
};

module.exports = {

    getWeatherData
};