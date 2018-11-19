const accountscontroller = require('./accounts');
const taskcontroller = require('./task');

module.exports = (app) => {

	app.post('/api/v1/task', taskcontroller.getItems);
	app.post('/api/v1/task/add', taskcontroller.addItem);

	app.post('/api/v1/user/login', accountscontroller.login);
	app.post('/api/v1/user/register', accountscontroller.register);
	app.post('/api/v1/user/logout', accountscontroller.logout);

};