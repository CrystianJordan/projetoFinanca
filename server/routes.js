const express = require('express');

const cotacoesController = require('./controllers/cotacoesController');

const routes = express.Router();

//rota para as cotações
routes.get('/cotacoes', cotacoesController.getCotacoes);


module.exports = routes;