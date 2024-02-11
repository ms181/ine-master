// Dependencies
require('dotenv').config();
require('./modules/db')();
const app = require('express')();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Routes
const userRoutes = require('./Routes/userRoutes');
const incomeRoutes = require('./Routes/incomeRoutes');
const expenseRoutes = require('./Routes/expenseRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');


// Middlewares
app.use(cors());
app.use(require('express').json());

// -- using routes --
app.use('/api/auth', userRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/category', categoryRoutes);
app.get('/', (req, res) => {
    res.status(200).json({status: true, msg: 'Server Wroking'});
})



// Start Server
app.listen( PORT, () => {
    console.log("Server Started on Port " + PORT);
});