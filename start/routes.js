'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.on('/').render('home')
Route.get('/posts', 'PostController.index')
Route.get('/posts/add', 'PostController.add')
Route.get('/posts/:id', 'PostController.details')
Route.get('/customers', 'CustomerController.index')
Route.get('/customers/add', 'CustomerController.add')
Route.get('/customers/:id', 'CustomerController.details')
Route.get('/properties', 'PropertyController.index')
Route.get('/properties/new', 'PropertyController.new')
Route.get('/properties/:id', 'PropertyController.details')
