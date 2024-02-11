const routes = require('express').Router();

const incomeCategoryController = require("../Controllers/categoryControllers");
const {addincomeCategory, addexpenseCategory} = incomeCategoryController;
const {protect} = require('../modules/jwt');

routes.post('/addincomecategory', protect,addincomeCategory);
routes.post('/addexpensecategory', protect,addexpenseCategory);


module.exports = routes;