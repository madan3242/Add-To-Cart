require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const connectDb = require('./config/dbConfig');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const app = express ();

//express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
}));

//morgan middleware
app.use(morgan('dev'));

app.use(cors());


//routes
const user = require('./routes/userRoutes');
const product = require('./routes/productRoutes');

app.use('/api/v1', user);
app.use('/api/v1', product);

app.get('/', (req, res) => {
    res.send('<h1>Add To Cart - Backend</h1>')
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.listen(process.env.PORT, ()=> {
    connectDb();
    console.log(`SERVER RUNNING ${process.env.PORT}`);
})