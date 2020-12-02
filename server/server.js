const express = require('express');
var cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors())


app.use(express.json());
app.use(routes);

//o servidor irá sempre estar na porta 5000
app.listen(5000, () => console.log('Servidor rodando na porta 5000'));