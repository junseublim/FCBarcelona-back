const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');


router.get('/', transferController.transferList);

module.exports = router;