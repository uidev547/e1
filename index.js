var index = require('./routes/index');
var users = require('./routes/users');
module.exports = {
	init: function function_name(app) {
		app.use('/e1', index);
		app.use('/e1users', users);	
	}
};
