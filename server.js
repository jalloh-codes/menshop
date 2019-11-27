const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const items = require('./routes/api/items');
const app =  express();

//bodyParser middleware
app.use(bodyParser.json());

// DB config 
const db = 'mongodb://localhost:27017/mernShop';

// connecting to mongo 
const port = process.env.PORT || 5000


mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MOngoDB connected...'))
    .catch(err => console.log('not connected', err))


// user routes
app.use('/api/items', items );

    app.listen(port, () => console.log(`on port  ${port}`));
