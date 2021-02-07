const jwt = require('jsonwebtoken')

function generateToken (payload) {
  return token = jwt.sign(payload, process.env.SECRET);
}

module.exports = generateToken
