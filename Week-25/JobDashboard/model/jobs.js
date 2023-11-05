const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  slug: { type: String },
  id: { type: String },
  epoch: { type: Number },
  date: { type: Date },
  company: { type: String },
  company_logo: { type: String },
  position: { type: String },
  tags: { type: [String] },
  logo: { type: String },
  description: { type: String },
  location: { type: String },
  salary_min: { type: Number },
  salary_max: { type: Number },
  url: { type: String },
  apply_url: { type: String },
});

module.exports = mongoose.model("job", jobSchema);
