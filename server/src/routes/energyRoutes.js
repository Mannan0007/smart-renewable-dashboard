const express = require('express');

const router = express.Router();

const {

    fetchWeather,

    fetchRenewableAnalytics

} = require('../controllers/energyController');

// For live weather

router.get('/weather', fetchWeather);

// For Live renewable score

router.get('/renewable-score', fetchRenewableAnalytics);

module.exports = router;