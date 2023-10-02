
// we run it from the terminal using the following command:
// node utils/seeder.js -i
// node utils/seeder.js -d
const Event = require("../models/Event");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const fs = require("fs");

mongoose.connect(process.env.MONGO_URI);

// read json file
const events = JSON.parse(fs.readFileSync(`${__dirname}/events.json`, "utf-8"));

const importData = async () => {
  try {
    await Event.create(events);
    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await Event.deleteMany();
    console.log("Data Destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
} else {
  console.log("Please enter the correct flag");
  process.exit();
}


