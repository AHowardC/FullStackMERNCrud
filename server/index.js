// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./config/keys");

const todoRoutes = require("./routes");
// connect database
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// create server
const app = express();

// config middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api/todos", todoRoutes);

// make port constant to dynamically bind based on heroku port assignment or port 5000 on local
const PORT = process.env.PORT || 5000;
// run server
// app.listen(PORT);

app.listen(PORT, () => console.log("Server is running on port 5000"));
