const express = require("express");
const { signUp } = require("../controller/user");
const router = express.Router();

router.route("/signup").post(signUp);
module.exports = router;
