const express = require('express')
const heroRouter=express.Router();
const heroesController = require('./controllers/heroesController')
heroRouter.get('/', heroesController.getHeroes);
heroRouter.get('/:id',heroesController.getHeroeById);
heroRouter.get('/:id/resenia/:tipo?',heroesController.getReseniaById);
module.exports=heroRouter