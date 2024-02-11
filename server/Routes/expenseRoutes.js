const router = require('express').Router();

const expenseController = require('../Controllers/expenseControllers');
const { addexpense } = expenseController;
const {protect} = require('../modules/jwt');

router.post('/addexpense',protect, addexpense);

module.exports = router;
