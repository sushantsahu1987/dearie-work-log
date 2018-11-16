const Account = require('../db/accounts');
const {save_error} = require('./constants')

const accountcontroller = {};

accountcontroller.login = (req, resp) => {
    console.log(req.body);
    console.log(save_error);
    Account.find({
        name: req.body.name
    }, (err, docs) => {
        if (err) {
            console.log(`login error : ${err}`);
            resp.send({
                msg: "login successfully",
            });
        }
        console.log(`${docs}`);
        resp.send({
            msg: "login successfully",
        });
    })

}

accountcontroller.register = (req, resp) => {
    console.log(req.body);
    const doc = new Account({
        name: req.body.name,
        password: req.body.password
    });
    doc.save(err => {
        if (err) {
            console.log(`register error : ${err}`);
            resp.send({
                msg: "register error",
            });
        }
        resp.send({
            msg: "registered successfully",
        });
        console.log("registered successfully");
    })
}

accountcontroller.logout = (req, resp) => {
    console.log(req.body);
    resp.send({
        item: 'logout'
    });
}

module.exports = accountcontroller;
