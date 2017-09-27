const express = require('express');
const router = express.Router();
const mailProvider = require('../providers/mail-provider'); 
const Validation = require('../utils/validation-util');
const debug = require('debug');

router.post('/', (req, res, next) => {
    const validation = new Validation(req);
    validation
        .isRequired('name')
        .isRequired('subject')
        .isRequired('data').minLength('data', 10)
        .isRequired('email').pattern('email', /[\w-_\.]+@[\w]+(\.[\w]+)+/i)
        .getResult((err, data) => {
            if (err) {
                debug(JSON.stringify(err));
                res.json({err: err, sucess: false});
            }
            mailProvider.sendMessage(data)
                .then(() => res.json({err: null, sucess: true}))
                .catch(next);
        })
});

module.exports = router;