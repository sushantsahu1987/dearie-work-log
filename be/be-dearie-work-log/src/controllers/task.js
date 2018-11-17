const Task = require('../db/task');
const dbcontroller = require('../db/dbcontroller');
const {save_success, save_error, 
    fetch_error, fetch_success
}  = require('./constants');

const taskcontroller = {};

taskcontroller.addItem = async (req, resp) => {

    const task = new Task({
        task: req.body.task });

    const result = await dbcontroller.save(
        task,
        save_success.msg,
        save_error.msg);

    const payload = {};
    if(result.err) {
        payload.error = result.err;
    }else {
        payload.result = req.body.task;
        payload.success = result.success;
    }

    console.log(payload)
    resp.send(payload);
    
}

taskcontroller.getItems = async (req, resp) => {

    const result = await dbcontroller.find(
        Task,
        {},
        fetch_success.msg,
        fetch_error.msg);

    const payload = {};
    if(result.err) {
        payload.error = result.err;
    }else {
        payload.data = result.data;
        payload.success = result.success;
    }

    console.log(payload)
    resp.send(payload);

}

module.exports = taskcontroller;