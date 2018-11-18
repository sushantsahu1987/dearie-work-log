const path = require('path');

const Account = require('../db/accounts');
const {
    register_success,
    register_error,
    register_duplicate
} = require('./constants');
const token = require('../utils/token');
const pwdutils = require('../utils/prod.pwdutils');
const dbccontroller = require('../db/dbcontroller');

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

accountcontroller.register = async (req, resp) => {
    console.log(req.body);

    const {
        seed1,
        seed2,
        hash
    } = pwdutils.hash(req.body.email, req.body.password)

    const acc = new Account({
        email: req.body.email,
        password: hash,
        salt1: seed1,
        salt2: seed2
    });

    const payload = {}
    try {
        const result = await dbccontroller.save(acc, register_success.msg, register_error.msg);
        console.log(result);
        payload.result = "token_generated";
        payload.success = result.success;
    }catch(error) {
        payload.error = error.err;
    }
    
    console.log(payload)
    resp.send(payload);

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