function errorMiddleware (err, req, res, next) {
    res.end(JSON.stringify(err));
}

module.exports = errorMiddleware;