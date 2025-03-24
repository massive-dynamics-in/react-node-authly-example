const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');


const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

dotenv.config();

const authly = require('./config/authly.config');
const port = process.env.PORT || 4000;

app.get('/oauth/authly/login', async (req, res) => {
    try {
        let authly_login_url = await authly.generateAuthLink();
        return res.status(200).json(authly_login_url);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.post('/oauth/authly/verify', async (req, res) => {
    try {
        let authly_veridy = await authly.verifyToken(req?.body?.token);
        return res.status(200).json(authly_veridy);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.post('/oauth/authly/logout', async (req, res) => {
    try {
        let authly_logout = await authly.logoutSession(req?.body?.token);
        return res.status(200).json(authly_logout);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
  console.log(`Authly.ME - Node - Example App listening at http://localhost:${port}`);
});