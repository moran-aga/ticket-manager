const express = require("express");
const app = express();
const api = require('./routes/api/index');

app.use(express.static("client/build"));
app.use('/api', api);
app.use('*', (req, res) => {
    res.status(404).json({message: 'Page Not Found'});
})

module.exports = app;