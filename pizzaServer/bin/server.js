"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/tamanhos', function (req, res) {
    res.json([
        {
            id: 1,
            name: "Pequeno",
            quantidade_sabores: 1
        },
        {
            id: 2,
            name: "Médio",
            quantidade_sabores: 2
        },
        {
            id: 3,
            name: "Grande",
            quantidade_sabores: 3
        }
    ]);
});
app.get('/sabores/:id', function (req, res) {
    var id = req.params.id;
    var tamanho1 = [
        {
            sabor: "Calabresa",
            preco: 12
        },
        {
            sabor: "Quatro Queijos",
            preco: 15
        },
        {
            sabor: "Bacon",
            preco: 13
        },
        {
            sabor: "Chocolate",
            preco: 14
        },
        {
            sabor: "Brocolis",
            preco: 16
        }
    ];
    var tamanho2 = [
        {
            sabor: "Calabresa",
            preco: 18
        },
        {
            sabor: "Quatro Queijos",
            preco: 21
        },
        {
            sabor: "Bacon",
            preco: 19
        },
        {
            sabor: "Chocolate",
            preco: 20
        },
        {
            sabor: "Brocolis",
            preco: 22
        }
    ];
    var tamanho3 = [
        {
            sabor: "Calabresa",
            preco: 25
        },
        {
            sabor: "Quatro Queijos",
            preco: 28
        },
        {
            sabor: "Bacon",
            preco: 26
        },
        {
            sabor: "Chocolate",
            preco: 27
        },
        {
            sabor: "Brocolis",
            preco: 29
        }
    ];
    if (id == 1) {
        res.json(tamanho1);
    }
    else if (id == 2) {
        res.json(tamanho2);
    }
    else if (id == 3) {
        res.json(tamanho3);
    }
    else {
        res.json({ errorDesc: "Envie um tamanho para receber os sabores", errorCode: "404" });
    }
});
app.post('/logon', function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    if (userName == "admin@senai" && password == "1234") {
        res.json({
            token: "11803D4D4E5CE7A89E1EC1861A04B8A6",
            userName: "admin@senai",
            password: "1234"
        });
    }
    else {
        res.statusCode = 401;
        res.json({
            HttpError: 401,
            ApiError: "1001",
            ErrorDescription: "",
            AditionalInfo: "Usuário e senha inválidos"
        });
    }
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
