// Start of Code [Evan Towlerton]

// Bring in Dependencies
const express =require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');

router.use('/api/', apiRoutes);

module.exports = router;