const axios = require("axios");
const cheerio = require("cheerio");
const Team = require('./models/Team');
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const uri = "https://www.soccertimes.com/leagues/spanish-la-liga";

const getTeams = async () => {
    teams = await axios.get(uri).then((html) => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("tr.standings-row");
        $bodyList.each(function (i, elem) {
            $score = $(this).children("td");
            ulList[i] = {
                name: $(this).find("span.team-names").text(),
                image: $(this).find("img.team-logo").attr('src'),
                rank: parseInt($(this).find("span.number").text()),
                played: parseInt($score[1].children[0].data),
                win: parseInt($score[2].children[0].data),
                draw: parseInt($score[3].children[0].data),
                lose: parseInt($score[4].children[0].data),
                for: parseInt($score[5].children[0].data),
                agianst: parseInt($score[6].children[0].data),
                difference: parseInt($score[7].children[0].data),
                points: parseInt($score[8].children[0].data),
            };
        })
        return ulList;
    });
    teams.forEach(async element => {
        let n = await Team.findOneAndUpdate({ name: element.name }, element, { new: true, upsert: true });
    });
}


module.exports = getTeams;