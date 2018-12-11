const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hey there, looking for a villain? You\'ve come to the right place')
})

