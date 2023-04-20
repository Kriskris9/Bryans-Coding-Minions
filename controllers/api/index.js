const router = require('express').Router();
const userRoutes =require('./user-routes')
const networkingRoutes = require('./networking-routes')
const memesRoutes= require ('./memes-routes')
const chatRoutes = require('./chat-routes')

// const studyRoutes = require('./study-routes')

router.use('/user', userRoutes);
router.use('/networking', networkingRoutes);
router.use('/memes', memesRoutes);
router.use('/chat', chatRoutes);

// router.use('/study', studyRoutes);

module.exports = router;
