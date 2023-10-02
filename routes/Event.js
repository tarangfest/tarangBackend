const Router = require("express").Router();
const { getEvent, getEvents } = require("../controllers/Event");
const { protectedRoute } = require("../middlewares/protectedRoute");

Router.route("/").get(getEvents);
Router.route("/:slug").get(getEvent);

module.exports = Router;
