const mongoose = require('mongoose');
const app = require('./src/app');
const Account = require('./src/db/accounts');
const Task = require('./src/db/task');

const connect = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('mongoose error connection')
    });
    db.once('open', () => {
        app.listen(3000, ()=> {
            console.log('server is running on port 3000');
        });
    })
}

const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_USER = process.env.MONGO_USER; 

let mongourl = process.env.MONGO_URL;
mongourl = mongourl.replace('MONGO_USER', MONGO_USER);
mongourl = mongourl.replace('MONGO_PWD', MONGO_PWD);

connect(mongourl);