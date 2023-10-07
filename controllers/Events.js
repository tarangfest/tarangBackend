const Event = require("../models/Event");
const User = require("../models/User");

// GET /api/v1/events
exports.getEvents = async (req, res, next) => {
  try {
    const { type } = req.query;
    const events = await Event.find(type ? { etype: { $in: type } } : {});
    console.log(events);
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

// POST
// add event to myEvents
exports.registerEvent = async (req, res, next) => {
  try {
    const { slug } = req.body;
    const { user } = req;
    const userDet = await User.findOne({ email: user.email });
    const event = await Event.findOne({ slug });
    if (!event) {
      return next({
        message: "Event not found",
        statusCode: 404,
      });
    }
    if (userDet.events.includes(event._id)) {
      return next({
        message: "Event already registered",
        statusCode: 400,
      });
    }
    userDet.events.push(event._id);
    await userDet.save();
    res.status(200).json({
      success: true,
      message: "Event registered successfully",
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
    const userDet = await User.findOne({ email: user.email });
    const event = await Event.findOne({ slug });
    if (!event) {
      return next({
        message: "Event not found",
        statusCode: 404,
      });
    }
    if (!userDet.events.includes(event._id)) {
      return next({
        message: "Event not registered",
        statusCode: 400,
      });
    }
    userDet.events.pull(event._id);
    await userDet.save();
    res.status(200).json({
      success: true,
      message: "Event removed successfully",
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

// {{TODO}}
// GET
// append +1 to
exports.reedemReferral = async (req, res, next) => {
  try {
    const { user } = req;
    const userDet = await User.findOne({ email: user.email });
    if (!userDet.referral) {
      return next({
        message: "No referral code found",
        statusCode: 404,
      });
    }
    userDet.referralCount += 1;
    await userDet.save();
    res.status(200).json({
      success: true,
      message: "Referral count incremented successfully",
    });
  } catch (error) {
    next(error);
  }
};
