const express = require('express');
const router = express.Router();
const mailProvider = require('../providers/mail-provider'); 

router.post('/', (req, res, next) => {
    mailProvider.sendMessage({})
        .then(() => res.json({sucess: true}))
        .catch(next);
});

module.exports = router;