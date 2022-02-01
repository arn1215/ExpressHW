const express = require('express');

// Create the Router instance.
const router = express.Router();

// Define routes.

router.get('/', (req, res) => {
 res.send('Home');
});

router.get('/schedule', (req, res) => {
 res.send('Schedule');
});

router.get('/roster', (req, res) => {
 res.send('Roster');
});

module.exports = router;


// use const routes = require('./routes'); in your app module.
// app.use('/portland-thorns', routes); mount the router instances