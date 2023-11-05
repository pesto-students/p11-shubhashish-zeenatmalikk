const mongoose = require("mongoose");
const express = require("express");
const axios = require("axios");
const Job = require("../model/jobs");
//what does this package do?
require("dotenv").config();

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB CONNECTED!!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}
connectToDb();

async function fetchDataAndStoreInDB() {
  try {
    const response = await axios.get("https://remoteok.io/api");
    const jobs = response.data;
    await Job.create(jobs);
    console.log("Job listings fetched and stored in the database.");
  } catch (error) {
    console.error("Error fetching or storing job listings:", error);
  }
}
fetchDataAndStoreInDB();
