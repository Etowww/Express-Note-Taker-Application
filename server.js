// Start of Code [Evan Towlerton]

// Require Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid =require('uuid');

// Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

