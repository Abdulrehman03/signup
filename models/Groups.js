const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: [],
    approved: {
        type: Boolean
    }
})
module.exports = Group = mongoose.model('group', GroupSchema)