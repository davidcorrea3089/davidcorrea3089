const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
var cowsay = require('cowsay')

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');
    res.end(
        cowsay.say(
            {
                text: 'Hola mundo',
                e: '^^',
                T: 'U '
            }
        )
    );
    });

    server.listen(port, hostname, () => {
        console.log(`Servidor corriendo en http://${hostname}:${port}/`)
    })
