const Task = require('./task');

const dbcontroller = {}

dbcontroller.save = (model,success, error) => {
    return new Promise((resolve, reject) => {
        model.save(err => {
            if (err) {
                console.log(`item error : ${err}`);
                reject(error);
            }
            resolve(success);
            console.log("item added successfully");
        });
    });
}

dbcontroller.find = (model, options,success, error) => {
    return new Promise((resolve, reject) => {
        model.find(options, (err, docs) => {
            if (err) {
                console.log(`task get error : ${err}`);
                reject(error);
            }
            console.log(`${docs}`);
            success.data = docs;
            resolve(success);
        })  

    })
}

dbcontroller.savetasks = (todo) => {
    return new Promise((resolve, reject) => {
        const task = new Task({
            task: todo
        });
        task.save(err => {
            if (err) {
                console.log(`item error : ${err}`);
                reject({
                    msg: "failed to add item",
                });
            }
            resolve({
                msg: "item added successfully"
            });
            console.log("item added successfully");
        });
    })
}

module.exports = dbcontroller;