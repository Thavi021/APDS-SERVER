console.log("First Try")
const http =require('http');
const app = require('./app');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer(
    {
        key: fs.readFileSync('keys/privatekey.'),
        cert: fs.readFileSync('keys/certificate')
    },app);


const server1 = http.createServer((req,res)=>{
    res.end('This is our first Try check nodemon');
});

server.listen(PORT);
