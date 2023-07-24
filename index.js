const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const myCollageRouter = require("./routeHandler/myCollageHandler");
const reviewRouter = require("./routeHandler/reviewHandler");
const collageRouter = require("./routeHandler/collageHandler");
require("dotenv").config();
const port = 5000;
app.use(cors());
app.use(express.json());

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

// database connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.jmqwkqq.mongodb.net/collageBooking`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err,"connect"));

app.use("/myCollage", myCollageRouter);
app.use("/collages", collageRouter);
app.use("/reviews", reviewRouter);

app.get("/", (req, res) => {
  res.send("hallo backend");
});

app.listen(port, () => {
  console.log("rounning collage server");
});
