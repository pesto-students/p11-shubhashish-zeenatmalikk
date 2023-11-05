const mongoose = require("mongoose");
const express = require("express");
const app = express();
require('dotenv').config()

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
}
connectToDatabase();

