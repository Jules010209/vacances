const express = require('express');
const app = express();
const path = require('path');
const { NekoBot } = require('nekobot-api');
const api = new NekoBot();

let port = 5000;

app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    // res.sendFile(path.join(__dirname + '/main.html'));
    res.render('main', { 
        url: await api.get('pgif')
    });
});

app.listen(port, () => console.log(`http://localhost:${port}`));