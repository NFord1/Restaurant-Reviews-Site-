// Import required modules
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Import route handlers
const indexRouter = require("./routes/index");
const restaurantsModule = require("./routes/restaurants");
const restaurantsRouter = restaurantsModule.router;
const starredRestaurantsRouter = require("./routes/starredRestaurants");

// Enable CORS
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route handling
app.use("/", indexRouter);
app.use("/restaurants/starred", starredRestaurantsRouter);
app.use("/restaurants", restaurantsRouter);

module.exports = app;
