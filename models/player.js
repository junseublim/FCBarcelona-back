const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    stats: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;

