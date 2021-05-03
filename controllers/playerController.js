const Player = require('../models/player');

const player_list = (req, res) => {
    Player.find()
        .then((result) => {
            ret = {};
            ret['Forwards'] = result.filter(p => p.position == 'Forward');
            ret['Midfielders'] = result.filter(p => p.position == 'Midfielder');
            ret['Defenders'] = result.filter(p => p.position == 'Defender');
            ret['Goalkeepers'] = result.filter(p => p.position == 'Goalkeeper');
            console.log(ret);
            res.json(ret);

        })
        .catch((err) => {
            console.log(err);
            res.json({ "error": err });
        })
}
module.exports = {
    player_list
}