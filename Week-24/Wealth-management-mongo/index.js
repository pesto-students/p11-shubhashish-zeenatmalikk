const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/database");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const userRoutes = require("./routes/user");
const assetRouter = require("./routes/assets");
const financeRouter = require("./routes/financialRecord");
app.use("/api/user", userRoutes);
app.use("/api/asset", assetRouter);
app.use("/api/financialdata", financeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
