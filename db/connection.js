require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connectMongo = async () => {
  try {
    const db = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Database connection successful on port: ${db.connection.port}, on host: ${db.connection.host}, name: ${db.connection.name} `
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = {
  connectMongo,
};
