const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;
const pwdutils = {};

pwdutils.hash = (text) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    return bcrypt.hashSync(text, salt);
}

pwdutils.verifyHash = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}


module.exports = pwdutils;
