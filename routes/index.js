// Start of Code [Evan Towlerton]

// Bring in Dependencies
const app = require('express').Router();
const apiRoutes = require('./apiRoutes/index');

app.use('/api/', apiRoutes);

module.exports = app;