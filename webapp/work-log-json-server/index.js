const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const uuidv1 = require('uuid/v1');
const moment = require('moment');
const cors = require('cors');

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
app.use(cors());
app.use(bodyParser.json());

app.get('/worklog', (req, resp) => {
    resp.send({
        worklog
    })
});

app.post('/worklog', (req, resp) => {

    console.log('post worklog');
    console.log(req.body);
    const {date, name, status} = req.body;
    console.log(`${date} ${name} ${status}`)

    worklog.push({
        id: uuidv1(),
        date: moment(date).format('DD-MM-YYYY'),
        name,
        status
    });

    resp.send({
        worklog
    })
});

app.post('/worklog/update', (req, resp) => {

    console.log('post worklog');
    console.log(req.body);
    const {id, status} = req.body;
    console.log(`${id} ${status}`)

    const work = worklog.find(val => id === val.id);
    work.status = status;

    resp.send({
        msg: 'success'
    })
});

app.post('/worklog/cancel', (req, resp) => {

    console.log('post worklog');
    console.log(req.body);
    const {id} = req.body;
    console.log(`${id}`)

    const work = worklog.find(val => id === val.id);
    work.status = 2;

    resp.send({
        msg: 'success'
    })
});

app.post('/worklog/login', (req, resp) => {
    console.log('post login');
    console.log(req.body);
    const {email, password} = req.body;
    let message;
    if(email === 'test' && password === 'test123') {
        message = 'success';
    }else {
        message = 'fail';
    }
    resp.send({
        msg: message
    })
});

app.listen(3001, () => {
    console.log('work log running on port 3001!');
})


console.log('hello');