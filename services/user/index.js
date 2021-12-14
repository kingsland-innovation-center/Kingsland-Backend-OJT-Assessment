const express = require('express')
const router = express.Router()

/**
 * Returns the user list.
 * Observe good security practices such as removing the password field 
 * from the response object.
 * 
 * If :id is given, the user with the given id will be returned.
 */
router.get('/', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Returns the user with the given id.
 */
router.get('/:id', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Registers a new user.
 */
router.post('/register', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

/**
 * Authenticates a user.
 */
router.post('/login', (request, response) => {
    response.status(500).send({
        error: 'Pending Implementations'
    })
})

module.exports = router