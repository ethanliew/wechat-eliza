
/**
 * Module dependencies.
 */


// controllers
var webadmin = require('../app/controllers/webadmin');
var xmlparser = require('express-xml-bodyparser');

/**
 * Expose
 */


module.exports = function (app) {

	// Webadmin
	app.get('/', webadmin.index);
	app.post('/', xmlparser({trim: false, explicitArray: false}), webadmin.receive);

}
