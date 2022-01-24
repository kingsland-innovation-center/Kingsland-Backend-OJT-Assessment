/**
 * This is a normal express server that runs on port 3000.
 * You have the freedom to add your own routes, libraries, and middlewares that you need.
 *
 * The routes have been premade for you,
 * but you may add more routes if you want to.
 *
 * You also have the freedom to use whatever
 * database and ORM technology that you are comfortable with.
 * You may also opt to eliminate the database entirely and use in-memory storage.
 */
const express = require("express");
const compression = require("compression");
const student = require("./services/student");
const user = require("./services/user");

const port = process.env.PORT || 3100;

const app = express();
app.use(compression());
app.use(express.json());

app.use("/student", student);
app.use("/user", user);

app.get("*", function (req, res) {
  res.status(404).send({ error: "route not found" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log("Server is running on port 3100");
  });
}

module.exports = app;
