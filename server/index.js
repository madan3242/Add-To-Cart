require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const connectDb = require('./config/dbConfig');

const app = express ();

//express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//morgan middleware
app.use(morgan('dev'));


//routes
const user = require('./routes/userRoutes');
const product = require('./routes/productRoutes');

app.use('/api/v1', user);
app.use('/api/v1', product);

app.get('/', (req, res) => {
    res.send('<h1>Add To Cart - Backend</h1>')
})

app.listen(process.env.PORT, ()=> {
    connectDb();
    console.log(`SERVER RUNNING ${process.env.PORT}`);
})