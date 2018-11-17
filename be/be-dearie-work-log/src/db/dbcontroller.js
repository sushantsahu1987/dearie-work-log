const Task = require('./task');

const dbcontroller = {}

dbcontroller.save = (model,success, error) => {
    return new Promise((resolve, reject) => {
        model.save(err => {
            const result = {};
            if (err) {
                console.log(`item error : ${err}`);
                result.error = error;
                reject(result);
            }else {
                console.log("item added succlessfully");
                result.success = success;
                resolve(result);            
            }
            
        });
    });
}

dbcontroller.find = (model, options,success, error) => {
    return new Promise((resolve, reject) => {
        model.find(options, (err, docs) => {
            const result = {};
            if (err) {
                console.log(`task get error : ${err}`);
                result.error = error;
                reject(result);
            }
            console.log(`${docs}`);
            result.data = docs;
            result.success = success;
            resolve(result);
        })  

    })
}

module.exports = dbcontroller;