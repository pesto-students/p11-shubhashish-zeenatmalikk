const express = require("express");
const router = express.Router();

const { fetchJobs, fetchJobByType } = require("../controller/jobs");
router.route("/").get(fetchJobs);
router.route("/byType").post(fetchJobByType);
module.exports = router;
