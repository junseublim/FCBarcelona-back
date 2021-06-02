const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose');
const uri = process.env.DB_URI;
const playerRoutes = require('./routes/playerRoutes');
const matchRoutes = require('./routes/matchRoutes');
const teamRoutes = require('./routes/teamRoutes');
const newsRoutes = require('./routes/newsRoutes');
const transferRoutes = require('./routes/transferRoutes');
var cron = require('node-cron');
var cors = require('cors')
app.use(cors());
const getNews = require('./crawlers/getNews');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    console.log('connected to db');
    app.listen(3001);
}).catch((err) => {
    console.log(err);
})

cron.schedule('* * * * *', () => {
    getNews();
    console.log("Crawler activated");
});



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);
app.use('/news', newsRoutes);
app.use('/transfers', transferRoutes);
