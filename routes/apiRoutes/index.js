// Start of Code [Evan Towlerton]

const app = require('express').Router();
const fs = require('fs');
// Import UUID, will use this module to assign ID's to notes
const { v4: uuidv4 } = require('uuid');

const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils')


app.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


app.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added Successfully!`);
    } else {
        res.status(400).json({ error: 'Error in adding note'})
    };
});




module.exports = app;