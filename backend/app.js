const express = require('express');
const resend = require('resend');
const apiSend = require('./api/send.ts');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/api/send', (req, res) => {
    res.send(apiSend);
})
app.listen(PORT, () => {
    console.log('listening on:', PORT)
})
