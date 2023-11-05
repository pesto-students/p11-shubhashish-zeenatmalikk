const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/database");
const userRoute = require("./routes/user");
const jobRoutes = require("./routes/jobs");
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/jobs", jobRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
