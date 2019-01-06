const mongoose = require('mongoose');
const app = require('./src/app');
const Work = require('./src/data/Work');

const connect = (user, password) => {

    const mongourl = 
    `mongodb+srv://${user}:${password}@mongo-dearie-worklog-qxzyv.mongodb.net/test?retryWrites=true`
    mongoose.connect(mongourl, {
        useNewUrlParser: true
    });
    
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('mongoose error connection')
    });
    db.once('open', () => {
        console.log('connected successfully');
        app.listen(3001, () => {
            console.log('work log running on port 3001!');
        });
    });
}

connect('test','test123');