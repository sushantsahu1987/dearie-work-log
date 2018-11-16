const Task = require('../db/task');
const dbcontroller = require('../db/dbcontroller');

const taskcontroller = {};

taskcontroller.addItem = async (req, resp) => {
    console.log('task controller add : post ')
    console.log(req.body);

    const result = await dbcontroller.savetasks(req.body.task);
    const payload = {};

    if(result.err) {
        payload.error = result.err
        resp.send({
                msg: result.err
            });
    }else {
        payload.data = result.data;
    }

    console.log(payload)
    resp.send(payload);
    
}

taskcontroller.getItems = (req, resp) => {
    Task.find({
    }, (err, docs) => {
        if (err) {
            console.log(`task get error : ${err}`);
            resp.send({
                msg: "failed to fetch tasks",
            });
        }
        console.log(`${docs}`);
        resp.send({
            msg: docs,
        });
    })   
}

module.exports = taskcontroller;