const app = require('./src/app');
const connectDb = require('./src/config');
const cloudinary = require('cloudinary').v2;

/**
 * Cloudinary config
 */
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

connectDb();

app.listen(process.env.PORT, ()=> {
    console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});