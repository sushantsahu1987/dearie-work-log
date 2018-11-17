const bcrypt = require('bcryptjs');
const md5 = require('md5');
const _ = require('lodash');
const crypto = require("crypto");

const SALT_ROUNDS = 12;
const pwdutils = {};

const rev = (l1, l2) => {
    l1 = l1.split("").reverse();
    l2 = l2.split("").reverse();
    const revstr = _.concat(l2, l1);
    return revstr.join("");
}

const mergearray = (s1, s2) => {
    const acc = [];
    const merge = (s1, s2, acc) => {
        for (let i = 0; i < s1.length; i++) {
            acc.push(s1[i]);
            acc.push(s2[i]);
        }
    }
    if (s1.length <= s2.length) {
        merge(s1, s2, acc);
        let arr = s2.slice(s1.length, s2.length);
        acc.push(...arr);
    } else {
        merge(s2, s1, acc);
        let arr = s1.slice(s2.length, s1.length);
        acc.push(...arr);
    }
    return acc.join("");
}

const genhashfn = (key, pwd, seed1, seed2) => {    

    const rseed1 = seed1 +"."+seed1.split("").reverse().join();
    const s1 = crypto.createHash('sha256')
        .update(rseed1).digest('hex');
    const s2 = crypto.createHash('sha256')
        .update(seed2).digest('hex');
    
    const res = mergearray(s1,s2)
    const revstr = rev(key, pwd);
    const rseedrevstr = rev(revstr, res);
    return md5(rseedrevstr);

}

pwdutils.hash = (key, pwd) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    
    const seed1 = crypto.randomBytes(20).toString('hex');
    const seed2 = crypto.randomBytes(20).toString('hex');

    const md5str = genhashfn(key, pwd, seed1, seed2);
    const hash = bcrypt.hashSync(md5str, salt);
    const hash64 = Buffer.from(hash).toString('base64');

    return {
        seed1,
        seed2,
        hash: hash64
    };
}

pwdutils.verifyHash = (key, password, hash, seed1, seed2) => {
    const asciihash = Buffer.from(hash, 'base64').toString('ascii');
    const md5str = genhashfn(key, password, seed1, seed2);
    return bcrypt.compareSync(md5str, asciihash);
}


module.exports = pwdutils;