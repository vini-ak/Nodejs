const express = require('express');
const app = express();

// sudo npm install nodemon -g

app.get("/", function(req, res) {
    // Só é possível enviar uma única resposta!!!!
    res.send("Bem vindo ao nosso site!!!");
});

app.get("/blog", function(req, res) {
    res.send("Acessando o blog.");
});

app.get("/canal/youtube", function(req, res) {
    res.send("Acessando o site do youtube.");
});

app.listen(4000, function(erro) {
    if(erro) {
        console.log(`Ocorreu um erro com o sistema: ${erro}`);
    } else {
        console.log('Servidor rodando na porta 4000.');
    }
});