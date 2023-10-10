const Router = require("express").Router();
const { protectedRouteAdmin } = require("../middlewares/protectedRoute");

const {
  getUsers,
  getUsersByEventSlug,
  verifyUserPayment,
} = require("../controllers/Admin");

Router.get("/", protectedRouteAdmin, getUsers);
Router.get("/event/:slug", protectedRouteAdmin, getUsersByEventSlug);
Router.put("/verify", protectedRouteAdmin, verifyUserPayment);

module.exports = Router;
