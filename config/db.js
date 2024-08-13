const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async() =>{
  
  try{
    console.log(config.db.mongoURI);
    console.log(typeof(config.db.mongoURI));
    const conn = await mongoose.connect(config.db.mongoURI);
    console.log(`Successfully Connected to MongoDB", ${conn.connection.host}`);
  }
  catch(error){
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}


module.exports = connectDB;