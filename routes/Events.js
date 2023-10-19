const Router = require("express").Router();
const {
  getEvent,
  getEvents,
  registerEvent,
  removeEvent,
  getMyEvents,
  clearevents,
} = require("../controllers/Events");
const maintenanceMiddleware = require("../middlewares/maintenance");
const { protectedRoute } = require("../middlewares/protectedRoute");
const User = require("../models/User");

const eventGuard = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user.purchaseTarangCard) {
    return res.status(401).json({
      success: false,
      message: "Cannot Add/Remove Events",
    });
  }
  next();
};

Router.route("/").get(getEvents);
Router.route("/:slug").get(getEvent);
Router.route("/register").post(
  maintenanceMiddleware,
  protectedRoute,
  eventGuard,
  registerEvent
);
Router.route("/remove").delete(
  maintenanceMiddleware,
  protectedRoute,
  eventGuard,
  removeEvent
);
Router.route("/myevents").get(protectedRoute, getMyEvents);
Router.route("/clear").delete(protectedRoute, clearevents);
// Router.route("/payment").put(protectedRoute, paymentMode);

module.exports = Router;
