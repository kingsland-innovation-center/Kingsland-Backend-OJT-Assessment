const express = require("express");
const router = express.Router();
const pool = require("../../db");
/**
 * Returns all students in the database.
 */
router.get("/", async (request, response) => {
  const { rows: students } = await pool.query("SELECT * FROM students");
  response.json(students);
  //   response.status(500).send({
  //     error: "Pending Implementations",
  //   });
});

/**
 * Returns a single student in the database.
 */
router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const {
    rows: [student],
  } = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
  response.json(student);
  // response.status(500).send({
  //   error: "Pending Implementations",
  // });
});

/**
 * Creates a student in the database and returns the created student object.
 */
router.post("/", async (request, response) => {
  const { first_name, last_name, email, course } = request.body;
  const {
    rows: [student],
  } = await pool.query(
    "INSERT INTO students (first_name, last_name, email, course) VALUES($1, $2, $3, $4) RETURNING *",
    [first_name, last_name, email, course]
  );
  response.json(student);
  // response.status(500).send({
  //   error: "Pending Implementations",
  // });
});

/**
 * Deletes a student from the database and returns the deleted student object.
 */
router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const {
    rows: [student],
  } = await pool.query("DELETE FROM students WHERE id = $1 RETURNING *", [id]);
  response.json(student);
  // response.status(500).send({
  //   error: "Pending Implementations",
  // });
});

/**
 * Modifies a student in the database and returns the modified student object.
 */
router.patch("/:id", async (request, response) => {
  const { id } = request.params;
  const { first_name, last_name, email, course } = request.body;
  const {
    rows: [student],
  } = await pool.query(
    "UPDATE students SET first_name = $1, last_name = $2, email = $3, course = $4 WHERE id = $5 RETURNING *",
    [first_name, last_name, email, course, id]
  );
  response.json(student);
  // response.status(500).send({
  //   error: "Pending Implementations",
  // });
});

module.exports = router;
