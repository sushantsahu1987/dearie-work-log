const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const TaskSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    uuid: {
        type: String,
        required: true,
        trim: true
    },
    task: {
        type: String,
        required: true,
        trim: true
    }
});

TaskSchema.plugin(timestamp);

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;