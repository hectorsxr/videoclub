const router = require('express').Router();
const moviesController = require('./movies.controller');

router.get('/', moviesController.get);
router.get('/rent/:id', moviesController.getRented);
router.post('/rent', moviesController.rent);
router.post('/return', moviesController.returnMovie);

module.exports = router;
