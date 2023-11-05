const Job = require("../model/jobs");

const fetchJobs = async (req, res) => {
  try {
    const response = await Job.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error);
    console.log("error", error);
  }
};

const fetchJobByType = async (req, res) => {
  let { keyword, location } = req.params;

  try {
    let query = {};
    if (keyword) {
      query.tags = keyword;
    }
    if (location) {
      // location = location.toLowerCase();
      query.location = { $regex: new RegExp(location, "i") };
    }
   
    const jobs = await Job.find(query);

    res.status(200).json(jobs);
  } catch (error) {
    console.log("error", error);
  }
};



module.exports = { fetchJobs, fetchJobByType };
