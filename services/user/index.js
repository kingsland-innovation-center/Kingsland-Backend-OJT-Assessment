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
  try {
    const { rows: users } = await pool.query(
      "SELECT id, first_name, last_name, username FROM users"
    );
    response.json(users);
  } catch (error) {
    response.status(400).send({ error });
  }
});

/**
 * Returns the user with the given id.
 */
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const {
      rows: [user],
    } = await pool.query(
      "SELECT id, first_name, last_name, username FROM users WHERE id = $1",
      [id]
    );
    response.json(user);
  } catch (error) {
    response.status(400).send({ error });
  }
});

/**
 * Registers a new user.
 */
router.post("/register", async (request, response) => {
  try {
    const { first_name, last_name, username, password } = request.body;
    const {
      rows: [user],
    } = await pool.query(
      "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, crypt($4, gen_salt('bf'))) RETURNING first_name, last_name, username, password",
      [first_name, last_name, username, password]
    );
    response.json(user);
  } catch (error) {
    response.status(400).send({ error });
  }
});

/**
 * Authenticates a user.
 */
router.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body;
    const {
      rows: [user],
    } = await pool.query(
      "SELECT id, first_name, last_name, username FROM users WHERE username = $1 AND password = crypt($2, password)",
      [username, password]
    );
    response.json(user);
  } catch (error) {
    response.status(400).send({ error });
  }
});

// removes a user
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const {
      rows: [user],
    } = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING id, first_name, last_name, username",
      [id]
    );
    response.json(user);
  } catch (error) {
    response.status(400).send({ error });
  }
});

// update password
router.patch("/update-password", async (request, response) => {
  try {
    const { username, old_password, new_password } = request.body;
    const {
      rows: [user],
    } = await pool.query(
      "UPDATE users SET password = crypt($3, gen_salt('bf')) WHERE username = $1 AND password = crypt($2, password) RETURNING id, first_name, last_name, username",
      [username, old_password, new_password]
    );
    response.json(user);
  } catch (error) {
    response.status(400).send({ error });
  }
});

module.exports = router;
