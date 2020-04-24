const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express();

routes.post('/devs', DevController.store);

module.exports = routes;