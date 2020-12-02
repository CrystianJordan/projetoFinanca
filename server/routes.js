const express = require('express');

const cotacoesController = require('./controllers/cotacoesController');
const tabelaController = require('./controllers/topEmpresasController');
const noticiasController = require('./controllers/noticiasController');

const routes = express.Router();

//rota para as cotações
routes.get('/cotacoes', cotacoesController.getCotacoes);
routes.get('/tabela', tabelaController.getTabela);
routes.get('/noticias', noticiasController.getNoticias);


module.exports = routes;