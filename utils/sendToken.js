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
    .cookie("token", token, {
      expires: new Date(Date.now() + 604800000),
      secure: false, // set to true if your using https
      httpOnly: true,
    })
    .status(statusCode)
    .send({
      success: true,
      token,
      verifyLink,
    });
};
