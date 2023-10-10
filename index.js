const express = require("express");
require("dotenv").config();
const cors = require("cors");
var cookieParser = require("cookie-parser");
const connectDb = require("./config/connectDB");
const { limiter } = require("./middlewares/rateLimiter");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 5000;

// cors

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://tarang-staging.vercel.app",
      "https://tarangfest.com",
      "https://www.tarangfest.com",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

// rate limit
app.use(limiter);

// body parser
app.use(express.json());

// cookie parser
app.use(cookieParser());

//connection to mongodb
connectDb();

//route files
const auth = require("./routes/Auth");
const events = require("./routes/Events");
const admin = require("./routes/Admin");

//mount routers
app.use("/api", auth);
app.use("/api/events", events);
app.use("/api/users", admin);

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
