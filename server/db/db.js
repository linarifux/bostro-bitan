const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.db_uri

const conn = async () => {
    try{
        await mongoose.connect(URI)
        console.log('MONGODB connected...');
    }catch(e){
        console.log('error while connecting to the server');
    }
}

module.exports = conn