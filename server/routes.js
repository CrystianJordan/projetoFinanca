const express = require('express');

const cotacoesController = require('./controllers/cotacoesController');
const tabelaController = require('./controllers/topEmpresasController');

const routes = express.Router();

//rota para as cotações
routes.get('/cotacoes', cotacoesController.getCotacoes);
routes.get('/tabela', tabelaController.getTabela);


module.exports = routes;