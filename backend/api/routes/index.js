const router = require('express').Router();
const authRouter = require('../auth/auth.router');
const moviesRouter = require('../movies/movies.router');
const clientsRouter = require('../clients/clients.router');

router.use('/auth', authRouter);
router.use('/movies', moviesRouter);
router.use('/clients', clientsRouter);

module.exports = router;
