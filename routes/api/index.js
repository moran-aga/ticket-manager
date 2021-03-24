const { Router } = require('express');
const api = Router();
const tickets = require('./tickets/index');

api.use('/tickets', tickets);
api.use('*', (req, res) => {
    res.status(404).json({message: 'Page Not Found'});
})

module.exports = api;