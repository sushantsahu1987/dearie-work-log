const faker = require('faker');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');

const users = [];
const tasks = [];

_.times(10, () => {
    const uuid = uuidv4();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const salt1 = uuidv4();
    const salt2 = uuidv4();

    const account = {
        uuid,
        email,
        password,
        salt1,
        salt2
    }
    users.push(account);
});

console.log(users);

_.forEach(users, u => {
    const n = Math.floor((Math.random() * 30) + 3);
    _.times(n, () => {
        const id = uuidv4();
        const task = faker.random.words();
        const uuid = u.uuid;
        const t = {
            id,
            task,
            uuid
        }
        tasks.push(t);
    });
});

console.log(tasks);
