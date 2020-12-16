const express = require('express')
const mainRouter=express.Router();
const mainController=require('../controllers/mainController')
mainRouter.get('/', mainController.getIndex );
mainRouter.get('/creditos',mainController.getCreditos) 

module.exports=mainRouter