const Team = require('../models/team');

const teamList = (req, res) => {
    Team.find().sort('rank')
        .then((result) => {
            res.json(result);

        })
        .catch((err) => {
            console.log(err);
            res.json({ "error": err });
        })
}
module.exports = {
    teamList
}