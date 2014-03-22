
/*!
 * Module dependencies.
 */

var path = require('path')
var root_path = path.resolve(__dirname + '../..')

/**
 * Expose config
 */

module.exports = {
	root: root_path,
	mongo_uri: process.env.MONGOLAB_URI,
	smtp_options: {
		service: 'SendGrid',
		auth: {
			user: process.env.SENDGRID_USERNAME,
			pass: process.env.SENDGRID_PASSWORD
		}
	},
	basic_auth: {
		user: process.env.BASIC_USER,
		pass: process.env.BASIC_PASS
	},
	time_format: 'YYYY-MM-DD HH:mm:ss'
}
