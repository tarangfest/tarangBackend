const mongoose = require("mongoose");
const slugify = require("slugify");
const ShortUniqueId = require("short-unique-id");
const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    tagline: {
      type: String,
      required: [true, "Please add a tagline"],
      trim: true,
    },
    event_type: {
      type: String,
      enum: ["Team", "Solo"],
      required: [true, "Please select an event type"],
    },
    event_category: {
      type: String,
      enum: [
        "Dance",
        "Music",
        "Drama",
        "Literary",
        "Fine Arts",
        "Photography",
        "Informal",
      ],
      required: [
        true,
        "Select from 'Dance','Music','Drama','Literary','Fine Arts','Photography','Informal'",
      ],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    reg_fees: {
      type: String,
      required: [true, "Please add registration fees"],
    },
    max_participants: {
      type: String,
      required: [true, "Please add maximum number of participants"],
    },
    min_participants: {
      type: String,
      required: [true, "Please add minimum number of participants"],
    },
    event_date: {
      type: String,
      required: [true, "Please add event date"],
    },
    event_time: {
      type: String,
    },
    org_club: {
      type: String,
      enum: [
        "Aavartan",
        "Shutter Box",
        "Jazbaat",
        "Samvaad",
        "Abhivyakti",
        "Saaz",
      ],
      required: [
        true,
        "Select from 'Aavartan','Shutter Box','Jazbaat','Samvaad','Abhivyakti'",
      ],
    },
    duration: {
      type: String,
      required: [true, "Please add a duration of event"],
    },
    instructions: {
      type: [String],
      required: [true, "Please add some instructions for the event"],
    },
    prize_pool: {
      type: String,
      required: [true, "Please add prize pool for the event"],
    },
    coordinators: [
      {
        name: {
          type: String,
          required: [true, "Please add some coordinators for the event"],
        },
        pno: {
          type: String,
          required: [true, "Please add some coordinators for the event"],
        },
      },
    ],
    images: {
      type: [String],
      required: [true, "Please add some images for the event"],
    },
    slug: String,
  },
  {
    collection: "events",
    timestamps: true,
  }
);
EventSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
EventSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Event", EventSchema);
