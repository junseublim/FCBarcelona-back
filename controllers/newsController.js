const News = require('../models/news');

const newsList = (req, res) => {
    News.find().sort({ 'date': 'asc' })
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log(err);
            res.json({ "error": err });
        })
}
module.exports = {
    newsList
}