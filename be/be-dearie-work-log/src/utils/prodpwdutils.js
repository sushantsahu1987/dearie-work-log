const bcrypt = require('bcryptjs');
const md5 = require('md5');

const SALT_ROUNDS = 10;
const pwdutils = {};

const rev = (l1, l2) => {
	l1 = l1.split("").reverse();
	l2 = l2.split("").reverse();
	rev = _.concat(l2,l1);
	return rev.join("");
}

pwdutils.hash = (key, pwd) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const revstr = rev(key, salt);
    const md5str = md5(revstr);
    return bcrypt.hashSync(pwd, md5str);
}


pwdutils.hash = (text) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    return bcrypt.hashSync(text, salt);
}

pwdutils.verifyHash = (password, hash) => {
    return bcrypt.compareSync(password, hash); // true
}


module.exports = pwdutils;
