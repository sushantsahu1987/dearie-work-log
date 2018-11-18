const mongoose = require('mongoose');
const Account = require('../db/accounts');
const Task = require('../db/task');

const faker = require('faker');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');

const dbcontroller = require('../db/dbcontroller');

const {
    register_error,
    register_success,
    save_success,
    save_error
} = require('../controllers/constants');

const test = async () => {

    const users = [];
    const tasks = [];

    _.times(5, () => {
        const uuid = uuidv4();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const salt1 = uuidv4();
        const salt2 = uuidv4();

        const acc = new Account({
            uuid,
            email,
            password,
            salt1,
            salt2
        });

        const usercontroller = dbcontroller.save(acc, register_success.msg, register_error.msg);
        users.push(usercontroller);
        const n = Math.floor((Math.random() * 10) + 3);
        _.times(n, () => {
            const id = uuidv4();
            const words = faker.random.words();
            const task = new Task({
                id,
                uuid,
                task: words
            })
            const taskcontroller = dbcontroller.save(task, save_success.msg, save_error.msg);
            tasks.push(taskcontroller);

        });

    });

    for (let usercontroller of users) {
        try {
            const result = await usercontroller;
            console.log(result);
        } catch (err) {
            console.log('user: error');
            console.log(err);
        }
    }

    for (let taskcontroller of tasks) {
        try {
            const result = await taskcontroller;
            console.log(result);
        } catch (err) {
            console.log('tasks: error');
            console.log(err);
        }
    }

}

const connect = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('mongoose error connection')
    });
    db.once('open', () => {
        test();
    })
}

const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_USER = process.env.MONGO_USER;

let mongourl = process.env.MONGO_URL;
mongourl = mongourl.replace('MONGO_USER', MONGO_USER);
mongourl = mongourl.replace('MONGO_PWD', MONGO_PWD);

connect(mongourl);