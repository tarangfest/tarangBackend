const mongoose = require("mongoose");
const crypto = require("crypto");
const ShortUniqueId = require("short-unique-id");

function generateRandomUUID() {
  return (
    "TRNG23#" +
    new ShortUniqueId({
      dictionary: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    }).randomUUID(6)
  );
}

const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    lname: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    age: {
      type: Number,
      required: [true, "Please add an age"],
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
      enum: ["Male", "Female", "Rather Not Say"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
      minlength: [10, "Phone number must be 10 digits"],
      maxlength: [10, "Phone number must be 10 digits"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false,
    },
    college: {
      type: String,
      required: [true, "Please add a college"],
      trim: true,
    },
    state: {
      type: String,
      required: [true, "Please add a state"],
      trim: true,
    },
    district: {
      type: String,
      required: [true, "Please add a district"],
      trim: true,
    },
    degree: {
      type: String,
      required: [true, "Please add a degree"],
      trim: true,
    },
    yearOfStudy: {
      type: String,
      required: [true, "Please add a year of study"],
      enum: ["First", "Second", "Third", "Fourth", "Fifth"],
    },
    tarang_id: {
      type: String,
      unique: true,
      index: true,
      default: generateRandomUUID,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
    },
    paymentFormFilled: {
      type: Boolean,
      default: false,
    },
    paymentVerified: {
      type: Boolean,
      default: false,
    },
    events: [
      {
        slug: {
          type: String,
        },
        eventId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
        teamleaderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        teamName: {
          type: String,
        },
      },
    ],
    referalCount: {
      type: Number,
      default: 0,
    },
    referredBy: {
      type: String,
    },
    hasAccomodation: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { collection: "users", timestamps: true }
);

UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
