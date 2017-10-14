const logger = require('winston');

module.exports = (req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
};
