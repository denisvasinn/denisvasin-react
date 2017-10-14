'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('winston');
const config = require('../config');
const indexPageMiddleware = require('./middlewares/index-page-middleware');
const mailMiddleware = require('./middlewares/mail-middleware');
const pingMiddeware = require('./middlewares/ping-middleware');
const loggerMiddleware = require('./middlewares/logger-middleware');
const errorMiddleware = require('./middlewares/error-middleware');

const options = {
    key: fs.readFileSync(path.join(__dirname, '../ssl/private.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../ssl/public.crt'))
};
const app = express();

app
    .set('env', process.env.NODE_ENV || 'development')
    .set('port', process.env.PORT || config.port)
    .use(helmet())
    .use(compression())
    .use(express.static(path.join(__dirname, '../build')))
    .use(bodyParser.json())
    .use(loggerMiddleware)
    .post('/mailto', mailMiddleware)
    .get('/ping', pingMiddeware)
    .get('/*', indexPageMiddleware)
    .use(errorMiddleware);

https
    .createServer(options, app)
    .listen(
        app.get('port'),
        () => logger.info(`Listening in ${app.get('env')} mode on port ${app.get('port')}.`)
    );