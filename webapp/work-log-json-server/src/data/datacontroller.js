const Work = require('./Work');

const workcontroller = {};
const usercontroller = {};

usercontroller.find = (callback) => {
    const user = 'test';
    const password = 'test123';
    callback.resolve({user, password});
}

workcontroller.update = (id, status, callback) => {
    Work.findByIdAndUpdate(id, {
        $set: {
            status
        }
    }, (err, doc) => {
        if (err) {
            console.log(`update error : ${err}`);
            callback.reject({error: `update error : ${err}`});
        }else {
            console.log('update: ');
            console.log(doc);
            callback.resolve({});
        }

    });
}

workcontroller.find = (attr, callback) => {
    Work.find(attr, (err, docs) => {
        if (err) {
            callback.reject({error: `find error : ${err}`});
        }else {
            callback.resolve(docs);
        }
    });
}


workcontroller.insert = ({id, name, date, status}, callback) => {
    const work = new Work({
        id, name, date, status
    });
    work.save(err => {
        if (err) {
            callback.reject({error: `insert error : ${err}`});
            console.log(`insert error : ${err}`);
        }else {
            callback.resolve();
        }
    })

}

module.exports = {
    workdbcontroller: workcontroller,
    userdbcontroller: usercontroller
}