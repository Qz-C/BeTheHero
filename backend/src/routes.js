const express = require("express");
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');


const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs', ongController.clear);

routes.get('/profile', profileController.index)

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
//:id = Route param
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;