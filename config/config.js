const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT,
  db: {
    mongoURI: process.env.CONNECTION_STRING
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiration: process.env.JWT_EXPIRATION
  },
}


module.exports = config;