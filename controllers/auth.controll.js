const user = require('../models/user.model');

function getSignup(req, res) {
  res.render('auth/signup')
}

async function createSignup(req, res) {
  await user.userSignup(req.body.email, req.body.password)
  res.json()
}

function getLogin(req, res) {
  res.render('auth/login')
}


module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  createSignup: createSignup
}