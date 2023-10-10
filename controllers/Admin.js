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
    const { tarangID, referralCode } = req.body;
    const user = await User.findOne({ tarang_id: tarangID });
    if (!user) {
      return next({
        message: "User not found",
        statusCode: 404,
      });
    }
    let refStatus = "";
    user.paymentVerified = true;
    if (referralCode) {
      const checkUser = await User.findOne({ tarang_id: referralCode });
      if (!checkUser) {
        refStatus = "Invalid referral code";
      } else {
        user.referredBy = referralCode;
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
