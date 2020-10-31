const express = require('express');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect(
    'mongodb+srv://tc3085:QgJS2oUPE7bXBwrg@cluster0.zuqab.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true })
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas!');
      console.error(error);
    });
  
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;