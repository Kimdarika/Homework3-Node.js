const express = require("express");
const app = express();

const userRoutes = require("./src/routes/UserRoutes");

app.use(express.json());
app.use("/api", userRoutes);

module.exports = app;