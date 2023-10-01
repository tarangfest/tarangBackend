const jsonwebtoken = require("jsonwebtoken");

module.exports = (user, statusCode, res, verifyLink) => {
  // TODO: remove verifyLink
  const token = jsonwebtoken.sign(
    { email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
  res
    .cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    })
    .status(statusCode)
    .json({
      success: true,
      token,
      verifyLink,
    });
};
