const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
  getLoggedInUser,
  verifyUser,
  logoutUser,
} = require("../controllers/Auth");
const { protectedRoute } = require("../middlewares/protectedRoute");
const maintenanceMiddleware = require("../middlewares/maintenance");

router.route("/register").post(maintenanceMiddleware, registerUser);
router.route("/login").post(maintenanceMiddleware, loginUser);
router.route("/forgotpassword").post(forgotPassword);
router.route("/user").get(protectedRoute, getLoggedInUser);
router.route("/verify/:token").put(verifyUser);
router.route("/logout").get(logoutUser);

module.exports = router;
