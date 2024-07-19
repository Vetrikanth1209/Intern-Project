const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    resourceId: { type: Number },
    resourceName: { type: String },
    enrolledDate: { type: String },
    coursename: { type: String },
    courseId: { type:Number },
    contact: { type: Number },
    email: { type: String },
});

const Resource = mongoose.model('resource', schema);
module.exports = Resource;