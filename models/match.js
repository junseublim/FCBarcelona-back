const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    team: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isHome: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },

});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;

