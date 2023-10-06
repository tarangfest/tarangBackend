const Router = require("express").Router();
const { getEvent, getEvents,registerEvent,removeEvent } = require("../controllers/Events");
const { protectedRoute } = require("../middlewares/protectedRoute");

Router.route("/").get(getEvents);
Router.route("/:slug").get(getEvent);
Router.route("/register").post(protectedRoute, registerEvent);
Router.route("/remove").delete(protectedRoute, removeEvent);

module.exports = Router;