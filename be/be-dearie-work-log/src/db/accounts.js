const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const AccountSchema = mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    salt1: {
        type: String,
        required: true,
        trim: true
    },
    salt2: {
        type: String,
        required: true,
        trim: true
    },
});

AccountSchema.plugin(timestamp);

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
