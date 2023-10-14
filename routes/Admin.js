const Router = require("express").Router();
const { protectedRouteAdmin } = require("../middlewares/protectedRoute");

const {
  getUsers,
  getUsersByEventSlug,
  verifyUserPayment,
  formCallback,
  getUnverifiedUsers,
  rejectUserPayment,
} = require("../controllers/Admin");

Router.get("/", protectedRouteAdmin, getUsers);
Router.get("/event/:slug", protectedRouteAdmin, getUsersByEventSlug);
Router.put("/verify", protectedRouteAdmin, verifyUserPayment);
Router.post("/formcallback", formCallback);
Router.get("/unverified", protectedRouteAdmin, getUnverifiedUsers);
Router.put("/reject", protectedRouteAdmin, rejectUserPayment);

module.exports = Router;
