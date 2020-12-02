const express = require('express');

const cotacoesController = require('./controllers/cotacoesController');
<<<<<<< HEAD
const tabelaController = require('./controllers/topEmpresasController');
=======
const noticiasController = require('./controllers/noticiasController');
>>>>>>> 821cdf7c65004bc836aadacf13c82f8ab446e75e

const routes = express.Router();

//rota para as cotações
routes.get('/cotacoes', cotacoesController.getCotacoes);
<<<<<<< HEAD
routes.get('/tabela', tabelaController.getTabela);
=======
routes.get('/noticias', noticiasController.getNoticias);
>>>>>>> 821cdf7c65004bc836aadacf13c82f8ab446e75e


module.exports = routes;