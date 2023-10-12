const jwt = require("jsonwebtoken");
const Users = require("../models/User");
exports.protectedRoute = async (req, res, next) => {
  let { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Not authorize to access this route" });

  try {
    // Verify token
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedUser;
    console.log(req.user);
    next();
  } catch (err) {
    next(new Error("Not authorize to access this route"));
  }
};


exports.protectedRouteAdmin = async (req, res, next) => {
  let { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Not authorize to access this route" });

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedUser;
    const user = await Users.findById(req.user.id);
    if (user.role != "admin") {
      return res
        .status(401)
        .json({ success: false, message: "Not authorize to access this route" });
    }
    next();
  } catch (err) {
    next(new Error("Not authorize to access this route"));
  }
}