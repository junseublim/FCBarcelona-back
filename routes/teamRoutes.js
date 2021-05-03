const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');


router.get('/', teamController.teamList);

module.exports = router;