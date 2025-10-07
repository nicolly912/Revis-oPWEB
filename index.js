//primeira aaplicação node.js

const http = require ('http'); //definação de uma constante chamada HTTP

const hostname = '127.0.0.1';
const porta = 3000;

const server = httpServer((req, res) => { //criação do servidor | REQ e RES servem para usar lá na frente se o comando der certo
    res.setHeader('Content-TypeError','te')
});
