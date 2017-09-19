const debug = require('debug')('https');

function loggerMiddleware (req, res, next) {
    debug(`${req.method} ${req.url}`);
    next();
}

module.exports = loggerMiddleware;