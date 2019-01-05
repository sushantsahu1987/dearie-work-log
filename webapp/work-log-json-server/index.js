const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const uuidv1 = require('uuid/v1');
const moment = require('moment');

const worklog = [];

for (let i = 0; i < 10; i++) {

    const w = {
        id: uuidv1(),
        date: moment(faker.date.past()).format('DD-MM-YYYY'),
        name: faker.lorem.sentence(),
        status: 0
    }
    worklog.push(w);

}

const app = express();
app.use(bodyParser.json());
app.get('/worklog', (req, resp) => {
    resp.send({
        worklog
    })
});

app.listen(3001, () => {
    console.log('work log running on port 3000!');
})


console.log('hello');