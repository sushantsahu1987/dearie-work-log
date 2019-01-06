const { userdbcontroller } = require('../data/datacontroller');

const usercontroller = {};

usercontroller.login = (req, resp) => {
    console.log('post login');

    const {email, password} = req.body;
    let message;
    const callback = {};
    callback.resolve = (result) => {
        if(email === result.user && 
                password === result.password) {
            message = 'success';
        }else {
            message = 'fail';
        }
        resp.send({
            msg: message
        })
    }

    callback.reject = (err) => {
        console.log(`reject ${err}`);
        message = 'fail';
        resp.send({
            msg: message
        })
    }

    userdbcontroller.find(callback)

}

usercontroller.logout = (req, resp) => {
    console.log('post logout');
    let message = 'success';
    // message = 'fail';
    resp.send({
        msg: message
    })
}

module.exports = usercontroller;
