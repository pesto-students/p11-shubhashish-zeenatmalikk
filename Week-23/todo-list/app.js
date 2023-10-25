require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000; // Use PORT environment variable or default to 3000

const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const router = require("./Router/TodoRouter");
app.use(cors());
app.use(express.json());
app.use("/api", router);


async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); 
  }
}

connectToDatabase();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
