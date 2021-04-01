'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('cadastro_site','AuthController.register').validator('StoreUser')
Route.post('auth','AuthController.login').middleware('guest')

Route.get('perfil','UserController.profile').middleware('auth')

Route.get('whatsapp', 'WhatsAppController.init').middleware('auth')
