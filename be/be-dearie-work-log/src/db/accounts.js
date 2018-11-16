const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const AccountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

AccountSchema.plugin(timestamp);

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
