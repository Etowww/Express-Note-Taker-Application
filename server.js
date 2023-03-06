// Start of Code [Evan Towlerton]

// Require Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
//const uuid =require('uuid');

// Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware for parsing JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));







// Start the server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);