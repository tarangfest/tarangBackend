const Router = require("express").Router();
const {
  getEvent,
  getEvents,
  registerEvent,
  removeEvent,
  getMyEvents,
  clearevents
} = require("../controllers/Events");
const { protectedRoute } = require("../middlewares/protectedRoute");

Router.route("/").get(getEvents);
Router.route("/:slug").get(getEvent);
Router.route("/register").post(protectedRoute, registerEvent);
Router.route("/remove").delete(protectedRoute, removeEvent);
Router.route("/myevents").get(protectedRoute, getMyEvents);
Router.route('/clear').delete(protectedRoute, clearevents)

module.exports = Router;
