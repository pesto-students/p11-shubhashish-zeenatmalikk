const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["Equity", "Fixed Income", "Alternatives"],
    required: true,
  },
});

const Asset = mongoose.model("Asset", assetSchema);
module.exports=Asset