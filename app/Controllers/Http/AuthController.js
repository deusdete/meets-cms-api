'use strict'

const User = use('App/Models/User')

class AuthController {

  async login({auth, request, response}){
    const { email, senha } = request.all()

    try {
      const token = await auth.attempt(email, senha)
      return response.json(token)
    } catch (error) {
      return response.send({error: 'Usuário ou senha inválidos! Verifique e-mail e senha, e tente novamente.'})
    }


  }

  async register({request, response}){

    await User.create(request.post())

    return response.send({success: 'Seus cadastro foi realizado com sucesso'})

  }
}

module.exports = AuthController
