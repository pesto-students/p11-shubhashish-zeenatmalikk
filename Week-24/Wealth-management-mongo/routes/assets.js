const express = require("express");
const router = express.Router();
const { createAsset } = require("../controller/assets");
router.route("/:userId").post(createAsset);
module.exports = router;
