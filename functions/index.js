const functions = require('firebase-functions');
const express   = require('express');

const createCandidate = require('./createCandidate');
const handleError     = require('./handleError');

const app = new Express();

app.use(createCandidate);
app.use(handleError);

module.exports.createCandidate = functions.https.onRequest(app);
