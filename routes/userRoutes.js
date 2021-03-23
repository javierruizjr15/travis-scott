const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// a POST request to CREATE data. Defining the URL the front-end REQUEST will take. localhost/api/users/register
router.post('/users/register', (req, res) => {
  // deconstructing req.body example: name is = req.body.name, req.body.email, req.body.username
  const { name, email, username } = req.body
  // DO NOT put the password inside the deconstruction because it makes the password vulnerable
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.log(err) }
    // sends the OK
    res.sendStatus(200)
  })
})

// a POST request to VALIDATE data is accurate to the DB and CREATE a session token.. Defining the URL the front-end REQUEST will take. localhost/api/users/login
router.post('/users/login', (req, res) => {
  // see's if the information the user puts in matches the info in the db
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    // if the user exists it will create a token that contains the user data, id.. The null can be changed to telling the front end user that the user doesn't exist or there's an error etc.
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

// update the users information and it's grabbing the token to confirm it's the user
router.put('/users', passport.authenticate('jwt'), (req, res) => {
  // updating the body of the user model
  User.update(req.body, { where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// deletes the users information
router.delete('/users', passport.authenticate('jwt'), (req, res) => {
  // deletes the body of the user model
  User.destroy({ where: { id: req.user.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router