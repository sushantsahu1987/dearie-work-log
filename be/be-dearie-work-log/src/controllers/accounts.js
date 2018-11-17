const path = require('path');

const Account = require('../db/accounts');
const {save_error} = require('./constants')
const token = require('../utils/token');


// const FILE = path.join()

// const pwdutils = require('../utils/devpwdutils');

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

    const hash = pwdutils.hash(user.password);
    console.log(`hash ${hash}`);

    const verify = pwdutils.verifyHash(user.password, hash);
    console.log(`verify ${verify}`);
    console.log(user);

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

accountcontroller.auth = (req, resp, next) => {
    console.log(`authenticate route ${req.body}`);
    const tkn = req.body.token;
    try {
        const decodedtkn = token.verifyToken(tkn);
        console.log(`authentication success ${decodedtkn}`);
        next();
    } catch (err) {
        console.log('authentication failed');
        resp.send({
            msg: "fail"
        });
    }
}


module.exports = accountcontroller;
