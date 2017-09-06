const params = {
    production: process.env.production
};

module.exports = [
    require('./webpack/client-config')(params),
    require('./webpack/server-config')(params)
];
