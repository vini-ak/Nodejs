const express = require('express');
const app = express();

// sudo npm install nodemon -g

app.get("/", function(req, res) {
    // Só é possível enviar uma única resposta!!!!
    res.send("Bem vindo ao nosso site!!!");
});

// app.get("/blog", function(req, res) {
//     res.send("Acessando o blog.");
// });

app.get("/blog/:artigo?", function(req, res) {
    let artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2>id do artigo: " +artigo +".</h2>")
    } else {
        res.send("<h1>Bem vindo ao meu blog.</h1>");
    }

});

// app.get("/canal/youtube", function(req, res) {
//     res.send("Acessando o site do youtube.");
// });

app.get("/canal/youtube", function(req, res) {
    let canal = req.query["canal"];
    if (canal) {
        res.send(canal);        
    } else {
        res.send("My chanel.")
    }

});

app.get("/ola/:nome", function(req, res) {
    let nome = req.params.nome;
    res.send("<h1>Olá, "+ nome +"</h1>");
});

app.listen(4000, function(erro) {
    if(erro) {
        console.log(`Ocorreu um erro com o sistema: ${erro}`);
    } else {
        console.log('Servidor rodando na porta 4000.');
    }
});