const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);


module.exports = router;


// require homeroutes and have router.use homeroutes