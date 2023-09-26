const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
  getLoggedInUser,
} = require("../controllers/Auth");
const { protectedRoute } = require("../middlewares/protectedRoute");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/forgotpassword").post(forgotPassword);
router.route("/user").get(protectedRoute, getLoggedInUser);

module.exports = router;
