const Event = require("../models/Event");
const User = require("../models/User");

// GET
// get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};

// GET
// get all users registered for an event by slug
exports.getUsersByEventSlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const event = await Event.findOne({ slug });
    if (!event) {
      return next({
        message: "Event not found",
        statusCode: 404,
      });
    }
    const users = await User.find({
      events: {
        $elemMatch: {
          slug: event.slug,
        },
      },
    }).populate("events");
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};

// POST
// verify user
exports.verifyUserPayment = async (req, res, next) => {
  try {
    const { tarangID } = req.body;
    const user = await User.findOne({ tarang_id: tarangID });
    if (!user) {
      return next({
        message: "User not found",
        statusCode: 404,
      });
    }
    let refStatus = "No Referral Code Entered";
    user.paymentVerified = true;
    if (user.referredBy) {
      const checkUser = await User.findOne({ tarang_id: user.referredBy });
      if (!checkUser) {
        refStatus = "Invalid referral code";
      } else {
        refStatus = "Referral code verified";
        checkUser.referalCount += 1;
        await checkUser.save();
      }
    }
    await user.save();
    res.status(200).json({
      success: true,
      message: "User payment verified",
      refStatus,
    });
  } catch (error) {
    next(error);
  }
};

// GET
// callback for google form indicating payment form filled
exports.formCallback = async (req, res, next) => {
  console.log(req.body);
  try {
    // prajwal refer
    const { tarangID } = req.body;
    const user = await User.findOne({ tarang_id: tarangID });
    if (!user) {
      return next({
        message: "User not found",
        statusCode: 404,
      });
    }
    user.paymentFormFilled = true;
    await user.save();
    res.status(200).json({
      success: true,
      message: "User payment form filled",
    });
  } catch (error) {
    next(error);
  }
};
