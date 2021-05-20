const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    isIn: {
        type: Boolean,
        required: true
    },
    from: {
        type: String,
        required: false
    },
    to: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    }

});

const Transfer = mongoose.model('Transfer', transferSchema);
module.exports = Transfer;

