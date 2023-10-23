const express = require('express');
const userController  = require('../controller/userController')
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));
route.post('/loginuser', userController.loginUser);
module.exports = route;