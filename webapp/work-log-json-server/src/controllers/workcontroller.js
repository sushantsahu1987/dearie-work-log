const faker = require('faker');
const uuidv1 = require('uuid/v1');
const moment = require('moment');
const { workdbcontroller } = require('../data/datacontroller');

const workcontroller = {};

workcontroller.update = (req, resp) => {

    console.log(req.body);
    const {id, status} = req.body;

    const findcallback = {};
    findcallback.resolve = (result) => {
        workdbcontroller.update(result[0]._id, status, updatecallback);
    }

    findcallback.reject = (err) => {
        console.log(`reject: ${err}`);
        resp.send({
            msg: 'fail'
        });
    }

    const updatecallback = {};
    updatecallback.resolve = (result) => {
        console.log(`success: ${result}`);
        resp.send({
            msg: 'success'
        })
    }

    updatecallback.reject = (err) => {
        console.log(`reject: ${err}`);
        resp.send({
            msg: 'fail'
        });
    }

    workdbcontroller.find({id}, findcallback);

}

workcontroller.cancel = (req, resp) => {
    console.log('post worklog');
    console.log(req.body);
    const {id} = req.body;
    console.log(`${id}`)

    const updatecallback = {};
    updatecallback.resolve = (result) => {
        console.log(`success: ${result}`);
        resp.send({ msg: 'success'})
    }

    updatecallback.reject = (err) => {
        console.log(`reject: ${err}`);
        resp.send({ msg: 'fail'})
    }


    const findcallback = {};
    findcallback.resolve = (result) => {
        console.log(`success: ${result}`);
        workdbcontroller.update(result[0]._id, 2, updatecallback);
    }

    findcallback.reject = (err) => {
        console.log(`reject: ${err}`);
        resp.send({ msg: 'fail'})
    }

    workdbcontroller.find({id}, findcallback);

}

workcontroller.add = (req, resp) => {
    console.log('post worklog');

    const {date, name, status} = req.body;
    const w = {
        id: uuidv1(),
        date: moment(date).format('DD-MM-YYYY'),
        name,
        status
    }

    const callback = {};
    callback.resolve = (result) => {
        console.log(`success: ${result}`);
        resp.send({
            msg: 'success'
        });
    }

    callback.reject = (err) => {
        console.log(`reject: ${err}`);
        resp.send({
            msg: 'fail'
        });
    }

    workdbcontroller.insert(w, callback);

}

workcontroller.get = (req, resp) => {

    console.log('workcontroller: get');

    const callback = {};
    callback.resolve = (results) => {
        console.log(`success: ${results}`);
        console.log(`result: length : ${results.length}`);

        const worklog = [];

        results.map(v => {
            const w = {
                id: v.id,
                name: v.name,
                status: v.status,
                date: v.date
            };
            worklog.push(w);
        });

        resp.send({
            worklog
        })
    }

    callback.reject = (err) => {
        console.log(`reject: ${err}`);
        resp.send({
            worklog:[]
        })
    }

    workdbcontroller.find({}, callback)

}

module.exports = workcontroller;