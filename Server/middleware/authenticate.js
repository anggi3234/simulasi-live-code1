const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
  try{
    const token = req.headers.access_token
    let decoded = jwt.verify(token, process.env.SECRET);
    req.decoded = decoded
    next()
  }
  catch (error) {
    next(error)
  }
}

module.exports = authenticate;
