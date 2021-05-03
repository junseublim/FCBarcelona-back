const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    rank: {
        type: Number,
        required: true
    },
    win: {
        type: Number,
        required: true
    },
    draw: {
        type: Number,
        required: true
    },
    lose: {
        type: Number,
        required: true
    },
    for: {
        type: Number,
        required: true
    },
    against: {
        type: Number,
        required: true
    },
    difference: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },

});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;

