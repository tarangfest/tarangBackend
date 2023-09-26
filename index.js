const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/connectDB");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 5000;

// cors
app.use(cors());
// body parser
app.use(express.json());

//connection to mongodb
connectDb();

//route files
const auth = require("./routes/Auth");

//mount routers

app.use("/api", auth);

app.get("/", (req, res, next) => {
  res.send({ success: true, message: "this is the landing of the server" });
  next();
});

//middlewares
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port number ${PORT}`
  );
});
