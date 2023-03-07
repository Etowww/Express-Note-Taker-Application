// Start of Code [Evan Towlerton]

const app = require('express').Router();
const fs = require('fs');
// Import UUID, will use this module to assign ID's to notes
const { v4: uuidv4 } = require('uuid');

const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils')


app.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = app;