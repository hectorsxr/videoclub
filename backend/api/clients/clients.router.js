const router = require('express').Router();
const clientsController = require('./clients.controller');

router.get('/', clientsController.get);

module.exports = router;
