const express = require('express');
const app = express();

const port = process.env.PORT || 4500;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/editarticle/:id', (req, res) => {
    const id = req.params.id;
    // Render the edit page with the article ID
    res.sendFile(__dirname + `/views/edit.html`);
  });
  

app.listen(port, ()=> {
    console.log(`app is running on ${port}`);
})



