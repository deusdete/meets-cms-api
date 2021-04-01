'use strict'

const User = use('App/Models/User')

class UserController {



  async profile({ auth, response }) {

    const user = await User.findBy('email', auth.user.email)

    return response.send(user)
  }
}

module.exports = UserController
