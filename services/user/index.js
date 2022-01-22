const express = require("express");
const router = express.Router();
const pool = require("../../db");

/**
 * Returns the user list.
 * Observe good security practices such as removing the password field
 * from the response object.
 *
 * If :id is given, the user with the given id will be returned.
 */
router.get("/", async (request, response) => {
  const { rows: users } = await pool.query(
    "SELECT id, first_name, last_name, username FROM users"
  );
  response.json(users);
  //   response.status(500).send({
  //     error: "Pending Implementations",
  //   });
});

/**
 * Returns the user with the given id.
 */
router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const {
    rows: [user],
  } = await pool.query(
    "SELECT id, first_name, last_name, username FROM users WHERE id = $1",
    [id]
  );
  response.json(user);
  //   response.status(500).send({
  //     error: "Pending Implementations",
  //   });
});

/**
 * Registers a new user.
 */
router.post("/register", async (request, response) => {
  const { first_name, last_name, username, password } = request.body;
  const {
    rows: [user],
  } = await pool.query(
    "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, crypt($4, gen_salt('bf'))) RETURNING first_name, last_name, username, password",
    [first_name, last_name, username, password]
  );
  response.json(user);
  //   response.status(500).send({
  //     error: "Pending Implementations",
  //   });
});

/**
 * Authenticates a user.
 */
router.post("/login", async (request, response) => {
  const { username, password } = request.body;
  const {
    rows: [user],
  } = await pool.query(
    "SELECT id, first_name, last_name, username FROM users WHERE username = $1 AND password = crypt($2, password)",
    [username, password]
  );
  response.json(user);
  //   response.status(500).send({
  //     error: "Pending Implementations",
  //   });
});

// removes a user
router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const {
    rows: [user],
  } = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING id, first_name, last_name, username",
    [id]
  );
  response.json(user);
});

// update password
router.patch("/update-password", async (request, response) => {
  const { username, old_password, new_password } = request.body;
  const {
    rows: [user],
  } = await pool.query(
    "UPDATE users SET password = crypt($3, gen_salt('bf')) WHERE username = $1 AND password = crypt($2, password) RETURNING id, first_name, last_name, username",
    [username, old_password, new_password]
  );
  response.json(user);
});

module.exports = router;
