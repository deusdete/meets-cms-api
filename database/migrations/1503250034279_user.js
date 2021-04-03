'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('celular', 11).notNullable().unique()
      table.string('senha', 60).notNullable()
      table.integer('qtde_usuarios')
      table.boolean('aceito')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
