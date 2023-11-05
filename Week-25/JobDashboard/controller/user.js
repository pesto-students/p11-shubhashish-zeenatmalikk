const User = require("../model/user");
const httpStatus = require("http-status-codes");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.toLowerCase();
    const existingUser = User.findOne(username);

    // if (existingUser) {
    //   res
    //     .status(httpStatus.FORBIDDEN)
    //     .json({ message: "The user already exists, Please sign in" });
    // }
    const hashedPass = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ username, password: hashedPass });
    res.status(httpStatus.OK).json(newUser);
  } catch (error) {
    console.log("error in creating user", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
};

module.exports = { signUp };
