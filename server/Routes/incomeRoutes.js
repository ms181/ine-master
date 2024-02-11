const router = require('express').Router();

const incomeController = require('../Controllers/IncomeControllers');
const { addIncome } = incomeController;
const {protect} = require('../modules/jwt');

router.post('/addincome',protect, addIncome);

module.exports = router;
