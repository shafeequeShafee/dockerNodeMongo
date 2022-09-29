const express = require('express');

const dotenv = require('dotenv').config();





const app= express()

app.use(express.json()) // json format use cheyyaaaan

app.use(express.urlencoded({ extended: true }))   // eth vennam ennu illa, forms nnu data edukkumbol mathram mathi

// Initialize DB
require('./initDB')();

const routerEmployee = require("./router/router")






app.use('/employee', routerEmployee)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});