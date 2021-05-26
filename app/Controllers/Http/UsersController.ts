import { Request } from '@adonisjs/http-server/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    const user = await User.all()

    return user
  }

  public async post({ request }: HttpContextContract) {
    const { password, email } = request.body()

    const user = new User()

    // Assign username and email
    user.email = email
    user.password = password

    // Insert to the database
    await user.save()

    return user
  }
}
