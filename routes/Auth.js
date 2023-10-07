const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
  getLoggedInUser,
  verifyUser,
} = require("../controllers/Auth");
const { protectedRoute } = require("../middlewares/protectedRoute");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/forgotpassword").post(forgotPassword);
router.route("/user").get(protectedRoute, getLoggedInUser);
router.route("/verify/:token").put(verifyUser);

module.exports = router;
