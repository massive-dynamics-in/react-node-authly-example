const Authly = require('authly-me');

const authly = new Authly(
    process.env.AUTHLY_SERVER_BASE_URL,
    process.env.AUTHLY_APP_KEY,
    {
        callback_url: process.env.AUTHLY_CALLBACK_URL,
    }
);

module.exports = authly;
