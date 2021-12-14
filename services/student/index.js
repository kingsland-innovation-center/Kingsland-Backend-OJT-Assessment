const express = require('express')
const router = express.Router()

/**
 * Returns all students in the database.
 */
router.get('/', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Returns a single student in the database.
 */
router.get('/:id', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Creates a student in the database and returns the created student object.
 */
router.post('/', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Deletes a student from the database and returns the deleted student object.
 */
router.delete('/:id', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Modifies a student in the database and returns the modified student object.
 */
router.patch('/:id', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

module.exports = router