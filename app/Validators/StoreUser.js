'use strict'

const { formatters } = use('Validator')

class StoreUser {
  get rules () {
    return {
      nome: 'required',
      email: 'required|email|unique:users,email',
      senha: 'required',
      qtde_usuarios: 'required',
      aceito: 'required'
    }
  }

  get messages () {
    return {
      'nome.required': 'Você deve fornecer um nome pessoal ou empresa',
      'email.required': 'Você deve fornecer um endereço de e-mail.',
      'email.email': 'Você deve fornecer um endereço de e-mail válido.',
      'email.unique': 'Este e-mail já está registado.',
      'senha.required': 'Você deve fornecer uma senha',
      'qtde_usuarios.required': 'Você deve fornecer uma quantidade de usuários',
      'aceito.required': 'Você deve aceitar os termos',
    }
  }

  get formatter () {
    return formatters.JsonApi
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreUser
