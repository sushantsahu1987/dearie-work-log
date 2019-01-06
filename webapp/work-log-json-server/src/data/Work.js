const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const WorkSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Number,
        required: true
    }
});

WorkSchema.plugin(timestamp);

const Work = mongoose.model('Work', WorkSchema);
module.exports = Work;
