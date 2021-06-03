const Match = require('../models/match');

const matchList = (req, res) => {
    Match.find()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log(err);
            res.json({ "error": err });
        })
}
module.exports = {
    matchList
}