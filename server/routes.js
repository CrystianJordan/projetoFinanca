const express = require('express');

const cotacoesController = require('./controllers/cotacoesController');
const noticiasController = require('./controllers/noticiasController');

const routes = express.Router();

//rota para as cotações
routes.get('/cotacoes', cotacoesController.getCotacoes);
routes.get('/noticias', noticiasController.getNoticias);


module.exports = routes;