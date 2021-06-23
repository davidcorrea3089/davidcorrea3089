const express = require('express');
const app = express();
const port = 8080;
var cowsay = require('cowsay');


app.get('/', (req, res) => {
    const eyes = req.query.eyes
    const tongue = req.query.tongue
    const text = req.query.text
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');;
    res.end(
        cowsay.say(
            {
                text: text,
                e: eyes,
                T: tongue
            }
        )
    );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })