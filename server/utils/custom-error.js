class CustomError extends Error {
    constructor(code = 500, message = 'Internal Server Error', ...params) {
        super(...params);
        this.code = code;
        this.message = message;
        this.date = Date.now();
    }
}

module.exports = CustomError;