const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

//o servidor irá sempre estar na porta 5000
app.listen(5000, () => console.log('Servidr rodando na porta 5000'));