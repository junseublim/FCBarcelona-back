const axios = require("axios");
const cheerio = require("cheerio");
const News = require('../models/news');
const uri = "https://www.fcbarcelona.com/en/football/first-team/news";

const getNews = async () => {
    news = await axios.get(uri).then((html) => {
        let newsList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("a.thumbnail--news");
        const addUri = `https://fcbarcelona.com`;
        $bodyList.each(function (i, elem) {
            //console.log($(this).find("img.thumbnail__image"))
            newsList[i] = {
                id: $(this).attr('data-article-id'),
                title: $(this).find("div.thumbnail__title").text(),
                summary: $(this).find("div.thumbnail__desc").text(),
                thumbnail: $(this).find("img.thumbnail__image").attr('data-image-src'),
                link: $(this).attr('href'),
                date: new Date()
            };
            if (!newsList[i].link.includes('https')) {
                newsList[i].link = addUri.concat(newsList[i].link);
            }
        })
        return newsList;
    });
    news.forEach(async (element) => {
        let n = await News.findOneAndUpdate({ id: element.id }, element, { upsert: true });
    });
};

module.exports = getNews;