const jwt = require('jsonwebtoken');
const fs = require('fs');

const token = {};

const readcertificate = (path) => {
    return fs.readFileSync(__dirname + path);
}

token.init = () => {
    token.private = readcertificate('/certificate/prod_certificate.key');
}

token.generateToken = (user) => {
    const tkn = jwt.sign({data: user}, token.private, {
        expiresIn: '15m'
    });
    return tkn;
}

token.verifyToken = (tkn) => {
    const decoded = jwt.verify(tkn, token.private);
    console.log(decoded);
    return decoded;
}


module.exports = token;