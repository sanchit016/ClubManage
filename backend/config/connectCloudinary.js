const dotenv = require("dotenv");
const cloudinary = require('cloudinary').v2;

dotenv.config();

const connectCloudinary = async () => {
    try{
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env. API_SECRET
        });
        console.log("Hurray! Cloudinary connected");
    } catch(err){
        console.log(err);
    }
};

module.exports = connectCloudinary;