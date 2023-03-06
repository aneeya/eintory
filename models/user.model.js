const bcrypt = require('bcryptjs');

const db = require('../data/database');

async function userSignup(email, password) {
  const hashedPassword = await bcrypt.hash(password, 12)

  await db.getDb().collection('users').insertOne({
    email: email,
    password: hashedPassword
  })
}

module.exports = {
  userSignup: userSignup
}