const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const config = require('../config');

const app = express();

app
    .disable('x-powered-by')
    .use(express.static(path.join(__dirname, '../build')))
    .use(bodyParser.json())
    .use('/', indexRouter)
    .listen(config.port, () => console.log('Listening on port 3000....'));
