const logger = require('winston');
const mailProvider = require('../providers/mail-provider');

module.exports = [
    (err, req, res, next) => {
        logger.error(err.stack);
        err.code = err.code || 500;
        next(err);
    },
    (err, req, res, next) => {
        if (process.env.NODE_ENV === 'production') {
            return next(err);
        }
        res.status(err.code).json({err});
    },
    (err, req, res, next) => {
        const html = `
            <!doctype html>
            <html lang="ru">
                <head>
                    <title>Ошибка</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0" />
                    <link rel="stylesheet" href="client/error-page.css" />
                </head>
                <body>
                    <p>Что-то пошло не так. Я уже работаю над этим.</p>
                </body> 
            </html>
        `;

        mailProvider.sendSpecials(err)
            .then(() => {
                if (req.xhr) {
                    return res.status(err.code).json({err: {}});
                }
                res.status(err.code).end(html);
            })
            .catch(next);
    }
];