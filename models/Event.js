const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  event_name: {
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
    trim: true,
  },
  reg_fees: {
    type: Number,
    required: [true, "Please add registration fees"],
  },
  max_participants: {
    type: Number,
    required: [true, "Please add maximum number of participants"],
    min: 1,
  },
  min_participants: {
    type: Number,
    required: [true, "Please add minimum number of participants"],
    min: 1,
  },
  event_date: {
    type: Date,
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
    type: String,
    required: [true, "Please add some instructions for the event"],
  },
  coordinators: {
    type: String,
    required: [true, "Please add some coordinators for the event"],
  },
});

module.exports = mongoose.model("Event", EventSchema);
