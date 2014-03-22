
/*!
 * Module dependencies.
 */

var express = require('express')
var bodyParser = require('body-parser');
var favicon = require('static-favicon');
var lessMiddleware = require('less-middleware');
var pkg = require('../package');
var path = require('path');
var xmlparser = require('express-xml-bodyparser');

/*!
 * Expose
 */

module.exports = function (app, config) {
	
	app.set('showStackError', true)

	// use express favicon
	app.use(favicon(config.root + '/public/images/favicon.ico'));

	
	// views config
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');
	app.use(bodyParser());
	app.locals.pretty = true;

	// super auth
	app.set('auth', express.basicAuth(function(user, pass) {
		return config.basic_auth.user === user && config.basic_auth.pass === pass;
	}));

	// less
	app.use(lessMiddleware(
		path.join(config.root,'/app/src/less'),
		{
			dest: path.join(config.root,'/public'),
			prefix: '/stylesheets',
			compress : true,
			debug: false,
			force: true
		}
	));
	
	app.use(xmlparser());


	//static should be after less-middleware
	app.use(express.static(config.root + '/public'))


	// expose pkg and node env to views
	app.use(function (req, res, next) {
		res.locals.pkg = pkg;
		next()
	})

	app.use(express.logger('tiny'));

}
