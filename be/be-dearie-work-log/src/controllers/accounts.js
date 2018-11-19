const path = require('path');

const Account = require('../db/accounts');
const {
    register_success,
    register_error,
    fetch_error,
    fetch_success,
    register_duplicate
} = require('./constants');
const token = require('../utils/token');
const pwdutils = require('../utils/prod.pwdutils');
const dbcontroller = require('../db/dbcontroller');

const accountcontroller = {};

accountcontroller.login = async (req, resp) => {

    console.log("login request");
    console.log(req.body.email);

    const payload = {}

    try {
        const result = await dbcontroller.find(
            Account, {
                "email": req.body.email,
                "password":req.body.password
            },
            fetch_success.msg,
            fetch_error.msg);
        
        console.log(`result login : ${result}`);
        payload.data = result.data;
        payload.success = result.success;

    } catch (ex) {
        console.log(ex);
        payload.error = ex.err;
    }

    console.log(payload)
    resp.send(payload);

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
    } catch (error) {
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