const { MongoClient, Collection } = require("mongodb");
const express = require("express");
const Todo = require("./Model/TodoModel"); 
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const router=require('./Router/TodoRouter')
app.use(cors());
app.use(express.json());
app.use("/api",router)

async function getAllDocuments() {
  try {
    await mongoose.connect(`mongodb+srv://zeenatmalikk:Malik987@cluster0.7s9rdpv.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Connected!");

    // const db = client.db(DB_NAME);
    // const result = await db.collection(COL_NAME).find().toArray();
    // console.log(result);
  } catch (error) {
    console.log("error", error);
  } 
}
getAllDocuments();

app.listen(3000, () => {
  console.log("server running on port 3000");
});
