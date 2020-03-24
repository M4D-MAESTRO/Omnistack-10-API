//Tipos de parametros:
//Query Params: req.query (Filtros, Ordenação, Paginação...) - GET
//Route Params: req.params (Identificar um recurso na alteração ou remoção) - DELETE ou PUT
//Body: Dados para alteração ou criação de um registro - POST ou PUT

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');
const URI = 'mongodb+srv://MAESTRO:Meiralima22@cluster0-pguyv.mongodb.net/test?retryWrites=true&w=majority';

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.Promise = global.Promise

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(console.log("mongodb connected successfully...."))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);