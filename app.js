const express = require('express')
const app = express()
const mongoose = require('mongoose');
const uri = "mongodb+srv://junslim10:expressdb11@cluster0.zm7zm.mongodb.net/fcb?retryWrites=true&w=majority";
const playerRoutes = require('./routes/playerRoutes');
const matchRoutes = require('./routes/matchRoutes');
const teamRoutes = require('./routes/teamRoutes');

var cors = require('cors')
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    console.log('connected to db');
    app.listen(5000);
}).catch((err) => {
    console.log(err);
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);
