'use strict'

const TodoUser = use('App/Models/Vue-Todo/VueTodoUser')

class UserController {
  async register({ request }) {
    try {
      const { email, password, name } = request.all()
      const user = await TodoUser.create({ name: name, email: email, password: password, username: email })
      return user
      
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = UserController
