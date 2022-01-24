const express = require("express");
const router = express.Router();
const pool = require("../../db");
const { verifyToken } = require("../../authentication");

/**
 * Returns all students in the database.
 */
router.get("/", verifyToken, async (request, response) => {
  try {
    const { rows: students } = await pool.query("SELECT * FROM students");
    response.status(200).json(students);
  } catch (error) {
    response.status(500).send({ error });
  }
});

/**
 * Returns a single student in the database.
 */
router.get("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;
    const {
      rows: [student],
    } = await pool.query("SELECT * FROM students WHERE id = $1", [id]);

    if (!student)
      return response.status(404).send({ error: "student not found" });

    response.status(200).json(student);
  } catch (error) {
    response.status(500).send({ error });
  }
});

/**
 * Creates a student in the database and returns the created student object.
 */
router.post("/", verifyToken, async (request, response) => {
  try {
    const { first_name, last_name, email, course } = request.body;
    if (!(first_name && last_name && email && course))
      return response.status(400).send({ error: "all inputs are required" });

    const {
      rows: [student],
    } = await pool.query(
      "INSERT INTO students (first_name, last_name, email, course) VALUES($1, $2, $3, $4) RETURNING *",
      [first_name, last_name, email, course]
    );
    response.status(200).json(student);
  } catch (error) {
    response.status(500).send({ error });
  }
});

/**
 * Deletes a student from the database and returns the deleted student object.
 */
router.delete("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;
    const {
      rows: [student],
    } = await pool.query("DELETE FROM students WHERE id = $1 RETURNING *", [
      id,
    ]);
    if (!student)
      return response.status(404).send({ error: "student not found" });

    response.status(200).json(student);
  } catch (error) {
    response.status(500).send({ error });
  }
});

/**
 * Modifies a student in the database and returns the modified student object.
 */
router.patch("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;
    const { first_name, last_name, email, course } = request.body;
    const {
      rows: [student],
    } = await pool.query(
      "UPDATE students SET first_name = $1, last_name = $2, email = $3, course = $4 WHERE id = $5 RETURNING *",
      [first_name, last_name, email, course, id]
    );
    if (!student)
      return response.status(404).send({ error: "student not found" });

    response.status(200).json(student);
  } catch (error) {
    response.status(500).send({ error });
  }
});

module.exports = router;
