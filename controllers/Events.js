const Event = require("../models/Event");
const User = require("../models/User");

const removeEvent = (events, eventID) => {
  return events.filter((event) => event.slug != eventID);
};

const checkEvent = (events, eventID) => {
  return events.some((event) => event.slug == eventID);
};

// GET /api/v1/events
exports.getEvents = async (req, res, next) => {
  try {
    const { type } = req.query;
    const events = await Event.find(type ? { etype: { $in: type } } : {});
    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/events/:slug
exports.getEvent = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const event = await Event.findOne({ slug });
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
// clear myEvents
exports.clearevents = async (req, res, next) => {
  try {
    const { user } = req;
    const userDet = await User.findById(user.id);
    console.log(userDet.events);
    userDet.events = [];
    await userDet.save();
    res.status(200).json({
      success: true,
      message: "Events cleared successfully",
      events: userDet.events,
    });
  } catch (error) {
    next(error);
  }
};

// POST
// add event to myEvents
// if event is team then i want team name and userDetid
exports.registerEvent = async (req, res, next) => {
  try {
    const { slug } = req.body;
    const { user } = req;
    const userDet = await User.findById(user.id);
    const event = await Event.findOne({ slug });
    if (!event) {
      return next({
        message: "Event not found",
        statusCode: 404,
      });
    }
    if (checkEvent(userDet.events, slug)) {
      return next({
        message: "Event already registered",
        statusCode: 400,
      });
    }
    if (event.event_type == "Team") {
      const { teamName } = req.body;
      if (!teamName) {
        return next({
          message: "Team name required",
          statusCode: 400,
        });
      }
      userDet.events.push({
        slug: event.slug,
        eventId: event._id,
        teamleaderId: userDet._id,
        teamName,
        eventFee: event.reg_fees,
      });
    } else {
      userDet.events.push({
        slug: event.slug,
        eventId: event._id,
        eventFee: event.reg_fees,
      });
    }
    userDet.totalCost += Number(event.reg_fees);
    await userDet.save();
    res.status(200).json({
      success: true,
      message: "Event registered successfully",
      events: userDet.events,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
// remove event from myEvents
exports.removeEvent = async (req, res, next) => {
  try {
    const { slug } = req.body;
    const { user } = req;
    const userDet = await User.findById(user.id);
    const event = await Event.findOne({ slug });
    if (!event) {
      return next({
        message: "Event not found",
        statusCode: 404,
      });
    }
    if (!checkEvent(userDet.events, slug)) {
      return next({
        message: "Event not registered by user",
        statusCode: 400,
      });
    }
    userDet.events = removeEvent(userDet.events, slug);
    userDet.totalCost -= event.reg_fees;
    await userDet.save();
    res.status(200).json({
      success: true,
      message: "Event removed successfully",
      events: userDet.events,
    });
  } catch (error) {
    next(error);
  }
};

// GET
// get myEvents
exports.getMyEvents = async (req, res, next) => {
  try {
    const { user } = req;
    const userDet = await User.findOne({ email: user.email }).populate(
      "events"
    );
    res.status(200).json({
      success: true,
      events: userDet.events,
    });
  } catch (error) {
    next(error);
  }
};