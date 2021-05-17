const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        reuried: true
    }

});

const News = mongoose.model('News', newsSchema);
module.exports = News;

