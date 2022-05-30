const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

//Routes
const postsRoute = require('./routes/posts.router');
const productsRoute = require('./routes/products.router');

const app = express();
const PORT = 3030;

//Middlewares
app.use((req, res, next) => {
    console.log('ip address: %o', req.ip);
    next();
});

app.use(bodyParser.json())
app.use(cors());
app.use('/posts', postsRoute);
app.use('/products', productsRoute);

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected...')
);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})