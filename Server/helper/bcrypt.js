const bcrypt = require('bcryptjs')

function hashPass(password) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash
}

function comparePass(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = {hashPass, comparePass}
