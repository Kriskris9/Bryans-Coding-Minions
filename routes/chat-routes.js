const router = require('express').Router();
const { Chat, User } = require('../../models');

//these are the routes for the chat page
//api/chat/endpoint

router.get('/', async (req, res) => {
    try{
        const chatData = await Chat.findAll({
            include: [{
    }