const router = require('express').Router();
const authRouter = require('../auth/auth.router');
// const clientRouter = require('../client/client.router');

router.use('/auth', authRouter);
// router.use('/client', clientRouter);

module.exports = router;
