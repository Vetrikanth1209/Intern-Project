const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    courseId: { type:Number },
    coursename: { type: String },
    courseDuration: { type: Number },
    coursePrerequisite:{type : String},
    courseExpert:{type : String}
});

const Course = mongoose.model('course', schema);
module.exports = Course;