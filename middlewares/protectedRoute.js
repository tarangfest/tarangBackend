const jwt = require("jsonwebtoken");
const Users = require("../models/User");
exports.protectedRoute = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Not authorize to access this route" });

  try {
    // Verify token
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    if (verifiedUser) {
    }
    const user = await Users.findOne({ email: verifiedUser.email });
    if (!userFound) {
      return res.status(401).json({
        success: false,
        message: "Not authorize to access this route",
      });
    }
    req.user = user;
    console.log(req.user);
    next();
  } catch (err) {
    next(new Error("Not authorize to access this route"));
  }
};
