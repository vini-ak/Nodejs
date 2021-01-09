let http = require("http");

http.createServer(function (req, res){
    res.end("<h1>Bem vindo ao meu servidor.</h1>")
}).listen(3000);

console.log("Servidor em execução");