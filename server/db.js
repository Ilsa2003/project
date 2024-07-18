const mongoose = require('mongoose');
const url = `mongodb+srv://admin:admin@cluster0.1r6ydvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports.connect = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database is connected");
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
};
