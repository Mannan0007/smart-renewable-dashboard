const calculateRenewableAnalytics = (weatherData) => {

    const {

        cloudCover,

        windSpeed,

        precipitation,

        humidity,

        temperature

    } = weatherData;

    let solarPotential = '';

    if (cloudCover <= 30 && precipitation === 0) {

        solarPotential = 'High';

    } else if (cloudCover <= 60) {

        solarPotential = 'Moderate';

    } else {

        solarPotential = 'Low';
    }

    let windPotential = '';

    if (windSpeed >= 15) {

        windPotential = 'High';

    } else if (windSpeed >= 7) {

        windPotential = 'Moderate';

    } else {

        windPotential = 'Low';
    }


    let score = 50;


    if (solarPotential === 'High') {

        score += 25;

    } else if (solarPotential === 'Moderate') {

        score += 15;

    } else {

        score += 5;
    }


    if (windPotential === 'High') {

        score += 20;

    } else if (windPotential === 'Moderate') {

        score += 10;

    } else {

        score += 5;
    }


    if (humidity > 85) {

        score -= 5;
    }


    if (score > 100) {

        score = 100;
    }


    let recommendedSource = '';

    if (solarPotential === 'High') {

        recommendedSource = 'Solar';

    } else if (windPotential === 'High') {

        recommendedSource = 'Wind';

    } else {

        recommendedSource = 'Hybrid';
    }


    let environmentStatus = '';

    if (score >= 80) {

        environmentStatus = 'Optimal';

    } else if (score >= 60) {

        environmentStatus = 'Good';

    } else {

        environmentStatus = 'Moderate';
    }


    const aiPrediction = {

        solarOutputChange: solarPotential === 'High' ? '+18%' : solarPotential === 'Moderate' ? '+5%' : '-12%',

        windEfficiencyChange: windPotential === 'High' ? '+22%' : windPotential === 'Moderate' ? '+8%' : '-15%',

        gridDemandChange: temperature > 25 || temperature < 10 ? '+15%' : '-6%',

        forecastSummary: 'AI models indicate ' + (score > 70 ? 'optimal' : 'fluctuating') + ' conditions for renewable generation over the next 24h.'

    };

    return {

        solarPotential,

        windPotential,

        renewableScore: score,

        recommendedSource,

        environmentStatus,

        aiPrediction

    };
};

module.exports = {

    calculateRenewableAnalytics
};