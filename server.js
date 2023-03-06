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


// HTML Routes
// Get * returns the index.html file for all requests other than /notes
app.get('*', (req, res) => {
    // Conditional logic to make sure '*' route doesn't override the /notes route
    if (req.url === '/notes') {
        res.sendFile(path.join(__dirname, '/public/notes.html'));
    } else {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    }
});

// GET /notes returns the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


// Start the server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);