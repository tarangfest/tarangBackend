const User = require("../models/User");
const bycrypt = require("bcryptjs");
const sendToken = require("../utils/sendToken");
const { sendVerificationMail } = require("../utils/sendMail");
const uuid = require("uuid").v4();

exports.verifyUser = async (req, res, next) => {
  const { token } = req.params;
  const user = await User.findOneAndUpdate(
    {
      verifyToken: token,
    },
    {
      verified: true,
      verifyToken: "*",
    }
  );
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User does not exist/verified already",
    });
  }
  await user.save({ validateBeforeSave: false });
  // {TODO: add redirect}
  // add redirect to frontend confirming verification
  return res.status(200).json({
    success: true,
    message: "Successfully verified user",
  });
};

exports.registerUser = async (req, res, next) => {
  const { email, password, fname } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        user,
      });
    }
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
      verifyToken: uuid,
    });
    await sendVerificationMail(uuid, email, fname);
    sendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;

  // {TODO: send mail}

  return res.status(200).json({
    success: true,
    message: "Email sent",
    resetUrl,
  });
};

// GET
// get logged in user
exports.getLoggedInUser = async (req, res, next) => {
  const { email } = req.user;
  const user = await User.findOne({ email });
  res.status(200).json({
    success: true,
    user,
  });
};

// GET
// logout user and clear cookie
exports.logoutUser = async (req, res, next) => {
  res
    .cookie("token", "none", {
      expires: new Date(0),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({
      success: true,
      message: "Logged out",
    });
};
