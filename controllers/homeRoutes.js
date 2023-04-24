const router = require('express').Router();
const { User, Memes, Chat, Study, Networking} = require('../models');
const withAuth = require('../utils/withAuth');


router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Memes }, { model: Chat }, { model: Study }]
        });
        const users = userData.map((user) => user.get({ plain: true }));
        res.render('homepage', { users,
        logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/study', withAuth, async (req, res) => {
    try {
        const studyData = await Study.findAll({
            include: [{ model: User }]
        });
        const study = studyData.map((study) => study.get({ plain: true }));
        res.render('study', { study,
            logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/memes', withAuth, async (req, res) => {
    try {
        const memesData = await Memes.findAll({
            include: [{ model: User }]
        });
        const memes = memesData.map((meme) => meme.get({ plain: true }));
        res.render('memes', { memes,
        logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/networking', withAuth, async (req, res) => {
    try {
        const networkingData = await Networking.findAll({
            include: [{ model: User }]
        });
        const networking = networkingData.map((networking) => networking.get({ plain: true }));
        res.render('networking', { networking,
            logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chat', withAuth, async (req, res) => {
    try {
        const chatData = await Chat.findAll({
            include: [{ model: User }]
        });
        const chats = chatData.map((chat) => chat.get({ plain: true }));
        // res.json(chats);
        res.render('chat', { chats,
        logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => { 
    if (req.session.logged_in) {
        console.log("you are logged in");
        res.redirect('/');
        return;
    }
    res.render('login');
});
    

module.exports = router; 