const util = require('util');
const request = require('request');
const mailProvider = require('../providers/mail-provider'); 
const check = require('../utils/validation-util');
const CustomError = require('../utils/custom-error');
const config = require('../../config');

/**
 * 
 * @param {*} res.body express req
 * @param {String} res.body.name
 * @param {String} res.body.subject
 * @param {String} res.body.data
 * @param {String} res.body.email
 * @param {String} res.body.recaptcha
 * 
 */

module.exports = (req, res, next) => {
    check(req.body, 'name').isRequired().minLength(3);
    check(req.body, 'subject').isRequired().minLength(10);
    check(req.body, 'data').isRequired().minLength(10);
    check(req.body, 'email').isRequired().pattern(/[\w-_.]+@[\w]+(\.[\w]+)+/i);
    check(req.body, 'recaptcha').isRequired();

    const errors = check.getErrors();
    const verifyUrl = `https://google.com/recaptcha/api/siteverify/
        ?secret=${config.recaptcha}
        &response=${req.recaptcha}
        &remoteip=${req.connection.remoteAddress}`;
    const requestPromise = util.promisify(request);

    if (errors.length > 0) {
        return next(new CustomError(400, errors.join(',\n')));
    }

    requestPromise(verifyUrl)
        .then((res, body) => {
            if (!body.success) {
                return next(new CustomError(400, 'You are robot'));
            }
            return mailProvider.sendMessage(req.body);
        })
        .then(() => res.status(200).json({err: null, success: true}))
        .catch(next);
};