const html = `
    <!doctype html>
    <html lang="ru">
        <head>
            <title>DENIS VASIN</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0" />
            <link rel="stylesheet" href="client/index-page.css" />
            <script src='https://www.google.com/recaptcha/api.js'></script>
        </head>
        <body>
            <div id="root"></div>
            <script src="client/index-page.js"></script>
        </body> 
    </html>
`;

module.exports = (req, res) => res.status(200).end(html);
