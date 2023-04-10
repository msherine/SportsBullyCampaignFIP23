const express = require('express');
const app = express();

const port = process.env.PORT || 3500;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/campaign', (req, res) => {
    res.sendFile(__dirname + '/views/campaign.html');
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html');
})

app.get('/article1', (req, res) => {
    res.sendFile(__dirname + '/views/article1.html');
})

app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/views/editarticle.html');
})

app.listen(port, ()=> {
    console.log(`app is running on ${port}`);
})

app.use(express.static('public'));
