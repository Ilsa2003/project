const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE = process.env.DATABASEURL;
const url = DATABASE;

const connect = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Database Is Connected");
  }).catch((err) => {
    console.error('Database connection error:', err);
    throw err; 
  });
};

module.exports = { connect };
