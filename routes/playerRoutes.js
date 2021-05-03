const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');


router.get('/', playerController.player_list);

module.exports = router;