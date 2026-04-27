const express = require('express');

const router = express.Router();

const {

    fetchWeather,

    fetchRenewableAnalytics

} = require('../controllers/energyController');

/* WEATHER */

router.get('/weather', fetchWeather);

/* RENEWABLE ANALYTICS */

router.get('/renewable-score', fetchRenewableAnalytics);

module.exports = router;