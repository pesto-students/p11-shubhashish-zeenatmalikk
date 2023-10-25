const mongoose = require("mongoose");
const financialRecordSchema = new mongoose.model({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
});

const financialRecord = mongoose.model(
  "FinancialRecord",
  financialRecordSchema
);

module.exports = financialRecord;
