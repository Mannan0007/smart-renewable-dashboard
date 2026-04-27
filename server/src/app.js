const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const energyRoutes = require('./routes/energyRoutes');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {

    res.json({
        message: 'Renewable Energy Backend Running 🚀'
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/energy', energyRoutes);

module.exports = app;