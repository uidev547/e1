var index = require('./routes/index');
var users = require('./routes/users');
var path = require('path');
module.exports = {
	init: function function_name(app) {
		app.use('/e1', index);
		app.use('/e1users', users);	
	}
};
