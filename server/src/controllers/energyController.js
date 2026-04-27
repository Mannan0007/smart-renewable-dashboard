const {

    getWeatherData

} = require('../services/weatherService');

const {

    calculateRenewableAnalytics

} = require('../services/renewableAnalyticsService');

/* WEATHER */

const fetchWeather = async (req, res) => {

    try {

        const city = req.query.city || 'San Francisco';

        const data = await getWeatherData(city);

        res.status(200).json({

            success: true,

            data
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

/* RENEWABLE ANALYTICS */

const fetchRenewableAnalytics = async (req, res) => {

    try {

        const city = req.query.city || 'San Francisco';

        /* GET WEATHER */

        const weatherData = await getWeatherData(city);

        /* CALCULATE ANALYTICS */

        const analytics = calculateRenewableAnalytics(weatherData);

        res.status(200).json({

            success: true,

            data: {

                weather: weatherData,

                analytics
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

module.exports = {

    fetchWeather,

    fetchRenewableAnalytics
};