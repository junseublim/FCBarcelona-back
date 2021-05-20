const Team = require('../models/transfer');

const transferList = (req, res) => {
    Team.find()
        .then((result) => {
            res.json(result);

        })
        .catch((err) => {
            console.log(err);
            res.json({ "error": err });
        })
}
module.exports = {
    transferList
}