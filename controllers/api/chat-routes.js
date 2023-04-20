const router = require('express').Router();
const { Chat, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const chatData = await Chat.findAll(
            {include: [{model: User,  attributes: ['user_name']}]
    });
        res.status(200).json(chatData);
        res.render('chat', { chatData });
        console.log(chatData);
    } catch (err) {
        res.status(500).json(err);
}});

// I don't think we will need this
router.get('/:id', async (req, res) => {
    try {
        const chatData = await Chat.findOne({
            where: {
                id: req.params.id
            }},
            {include: [{model: User, attributes: ['user_name']}]
        });
        res.status(200).json(chatData);
        console.log(chatData);
    } catch (err) { 
        res.status(500).json(err);
}});

router.post('/', async (req, res) => {
    try{
        const chatData = await Chat.create({
            user_name: req.body.user_name,
            message: req.body.message,
            photo: req.body.photo,
            gif: req.body.gif,
            video: req.body.video,
            fromUser: true,
        });
        res.status(200).json(chatData);
        console.log(chatData);
    } catch (err) {
        res.status(400).json(err);
}});

router.delete('/:id', async (req, res) => {
    try {
        const chatData = await Chat.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!chatData) {
            res.status(404).json({ message: 'No chat found with this id!' });
            return;
        }
        res.json(chatData);
        console.log(chatData);
    } catch (err) {
        res.status(500).json(err);
}});

module.exports = router;