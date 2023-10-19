const Event = require("../models/Event");
const User = require("../models/User");
const { sendPaymentStatus } = require("../utils/sendMail");

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
// get all unverified users
exports.getUnverifiedUsers = async (req, res, next) => {
  try {
    // i want users who have not paid and have filled the form and have not been rejected
    const users = await User.find({
      paymentVerified: false,
      paymentFormFilled: true,
      paymentRejected: false,
    });
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

// PUT
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
    const { email, fname } = user;
    await sendPaymentStatus(email, fname, "Payment Successfully Verified", "");
    res.status(200).json({
      success: true,
      message: "User payment verified",
      refStatus,
    });
  } catch (error) {
    next(error);
  }
};

// PUT
// reject user payment
exports.rejectUserPayment = async (req, res, next) => {
  try {
    const { tarangID, rejectionReason } = req.body;

    const user = await User.findOne({ tarang_id: tarangID });
    if (!user) {
      return next({
        message: "User not found",
        statusCode: 404,
      });
    }
    user.paymentVerified = false;
    user.paymentRejected = true;
    await user.save();
    const { email, fname } = user;
    await sendPaymentStatus(email, fname, "Payment Rejected", rejectionReason);
    res.status(200).json({
      success: true,
      message: "User payment rejected",
    });
  } catch (error) {
    next(error);
  }
};

// GET
// callback for google form indicating payment form filled
exports.formCallback = async (req, res, next) => {
  try {
    const { tarangID, accomodation, purchaseTarangCard } = req.body;
    const user = await User.findOne({ tarang_id: tarangID });
    if (!user) {
      return next({
        message: "User not found",
        statusCode: 404,
      });
    }
    user.paymentFormFilled = true;
    if (accomodation == "Yes") {
      user.hasAccomodation = true;
    } else {
      user.hasAccomodation = false;
    }
    if (purchaseTarangCard == "Yes") {
      user.purchaseTarangCard = true;
      user.totalCost = 1499;
    } else {
      user.purchaseTarangCard = false;
    }
    await user.save();
    res.status(200).json({
      success: true,
      message: "User payment form filled",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateRejection = async (req, res, next) => {
  try {
    const { tarangID } = req.body;
    const user = await User.findOne({ tarang_id: tarangID });
    if (!user) {
      return next({
        message: "User not found",
        statusCode: 404,
      });
    }
    user.paymentVerified = true;
    user.paymentRejected = false;
    await user.save();
    const { email, fname } = user;
    await sendPaymentStatus(email, fname, "Payment Successfully Verified", "");
    res.status(200).json({
      success: true,
      message: "User payment updated",
    });
  } catch (error) {
    next(error);
  }
};

exports.getRejectedUsers = async (req, res, next) => {
  try {
    const users = await User.find({
      paymentRejected: true,
    });
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};
