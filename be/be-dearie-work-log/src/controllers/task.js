const uuidv4 = require('uuid/v4');

const Task = require('../db/task');
const dbcontroller = require('../db/dbcontroller');
const {
    save_success,
    save_error,
    fetch_error,
    fetch_success
} = require('./constants');

const taskcontroller = {};

taskcontroller.addItem = async (req, resp) => {

    console.log('task add:item');
    console.log(req.body);

    const task = new Task({
        uuid: req.body.uuid,
        id: uuidv4(),
        task: req.body.task
    });

    const payload = {};
    try {
        const result = await dbcontroller.save(
            task,
            save_success.msg,
            save_error.msg);

        payload.result = req.body.task;
        payload.success = result.success;
    } catch (error) {
        payload.result = "fail";
        payload.error = error.error;
    }
    console.log(payload)
    resp.send(payload);

}

taskcontroller.getItems = async (req, resp) => {

    console.log('task get:items');
    console.log(req.body);

    const payload = {};
    try {
        const result = await dbcontroller.find(
            Task, {
                uuid: req.body.uuid
            },
            fetch_success.msg,
            fetch_error.msg);

        payload.data = result.data;
        payload.success = result.success;
    } catch (error) {
        payload.result = "fail";
        payload.error = error.error;
    }
    console.log(payload)
    resp.send(payload);

}

module.exports = taskcontroller;