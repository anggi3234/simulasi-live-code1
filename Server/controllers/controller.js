const {User, Photo} = require('../models')
const {comparePass} = require('../helper/bcrypt')
const generateToken = require('../helper/jwt')

class Controller {
  static register (req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.create(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      next(err)
    })
  }

  static login(req, res, next) {
    let newlogin = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({where: {email}})
    .then(user => {
      let compare = comparePass(newlogin.password, user.password)
      if(compare) {
        let access_token = generateToken({id: user.id, email: user.email})
        res.status(200).json(access_token)
      } else {
        res.status(401).json({msg: "User not authorize"})
      }
    })
    .catch(err => {
      next(err)
    })
  }

  static getPhotos(req, res, next) {
    let UserId = req.headers.User.id
    Photo.findAll({
      where: {
        UserId
      }
    })
    .then(photos => {
      res.status(200).json(photos)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = Controller
