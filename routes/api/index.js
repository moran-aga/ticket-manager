const { Router } = require('express');
const api = Router();
const tickets = require('./tickets/index');

api.use('/tickets', tickets);

module.exports = api;