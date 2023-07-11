require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express ();

//express middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
}));

//morgan middleware
app.use(morgan('dev'));
//cors middleware
app.use(cors());

//routes
const user = require('./routes/userRoutes');
const product = require('./routes/productRoutes');

app.use('/api/v1', user);
app.use('/api/v1', product);

app.get('/', (req, res) => {
    res.send('<h1>Add To Cart - Backend</h1>')
})

module.exports = app