const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: { type: String },
    password: { type:Number },
});

const Acc = mongoose.model('accs', schema);
module.exports = Acc;