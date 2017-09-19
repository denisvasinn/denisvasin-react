'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index-router');
const mailRouter = require('./routes/mail-router');
const config = require('../config');
const debug = require('debug')('app');
const loggerMiddleware = require('./middlewares/logger-middleware');
const errorMiddleware = require('./middlewares/error-middleware');

process.env.NODE_ENV = 'development';   //'production'

const options = {
    key: fs.readFileSync(path.join(__dirname, '../ssl/private.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../ssl/public.crt'))
};
const app = express();

app
    .set('env', process.env.NODE_ENV)
    .set('port', process.env.PORT || config.port)
    .use(helmet())
    .use(compression())
    .use(express.static(path.join(__dirname, '../build')))
    .use(bodyParser.json())
    .use(loggerMiddleware)
    .use('/', indexRouter)
    .use('/mail', mailRouter)
    .use(errorMiddleware);

https
    .createServer(options, app)
    .listen(
        app.get('port'),
        () => debug(`Listening in ${app.get('env')} mode on port ${app.get('port')}.`)
    );