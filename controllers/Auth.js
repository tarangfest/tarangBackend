const User = require("../modals/User");
const bycrypt = require("bcryptjs");
const sendToken = require("../utils/sendToken");
exports.registerUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        user,
      });
    }
    // encrypt the password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });
    sendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    // check if the password is correct
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new Error("Invalid credentials"));
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

  // TODO: send email

  return res.status(200).json({
    success: true,
    message: "Email sent",
    resetUrl,
  });
};

exports.getLoggedInUser = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      noOFFollowers: user.followers.length,
      noOFFollowing: user.following.length,
      joinedAt: user.createdAt,
    },
  });
};
