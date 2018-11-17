const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
const pwdutils = {};


pwdutils.hash = (pwd, key) => {
    const newkey = key.split("").reverse().join("");
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);

    
    return bcrypt.hashSync(text, salt);
}


pwdutils.hash = (text) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    return bcrypt.hashSync(text, salt);
}

pwdutils.verifyHash = (password, hash) => {
    return bcrypt.compareSync(password, hash); // true
}


module.exports = pwdutils;
