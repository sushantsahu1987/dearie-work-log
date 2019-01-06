const usercontroller = require('./controllers/usercontroller');
const workcontroller = require('./controllers/workcontroller');

module.exports = (app) => {

	app.get('/api/v1/worklog' , workcontroller.get);
	app.post('/api/v1/worklog/add', workcontroller.add);
    app.post('/api/v1/worklog/update', workcontroller.update);
	app.post('/api/v1/worklog/cancel', workcontroller.cancel);

	app.post('/api/v1/user/login', usercontroller.login);
	app.post('/api/v1/user/logout', usercontroller.logout);

};