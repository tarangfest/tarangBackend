const Router = require("express").Router();
const { protectedRouteAdmin } = require("../middlewares/protectedRoute");

const {
  getUsers,
  getUsersByEventSlug,
  verifyUserPayment,
  formCallback,
} = require("../controllers/Admin");

Router.get("/", protectedRouteAdmin, getUsers);
Router.get("/event/:slug", protectedRouteAdmin, getUsersByEventSlug);
Router.put("/verify", verifyUserPayment);
Router.post("/formcallback", formCallback);

module.exports = Router;
