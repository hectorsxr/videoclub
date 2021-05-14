const express = require('express');
const clientController = require('../controller/client.controller');

const router = express.Router();

router.get('/', clientController.getData);

module.exports = router;
