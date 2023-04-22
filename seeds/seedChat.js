const sequelize = require('../config/connection');
const {Chat}= require('../models');


const chatSeedData = [
  // first one and coder 4 seed data
  {
    "user_name": "coder1",
    "message": "Why do Java developers wear glasses? Because they don't C#!",
    "photo": "https://i.imgur.com/z9jU7E6.jpg"
  },
  {
    "user_name": "coder2",
    "message": "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "gif": "https://media.giphy.com/media/AuwBPJztsEWkw/giphy.gif"
  },
  {
    "user_name": "coder3",
    "message": "I would tell you a UDP joke, but you might not get it.",
    "video": "https://www.youtube.com/watch?v=AFxLA_xt7LM"
  },
  {
    "user_name": "coder4",
    "message": "There are 10 types of people in this world: Those who understand binary and those who don't.",
    "photo": "https://i.imgur.com/Xu5bqYC.jpg"
  },
];


const seedChat = () => Chat.bulkCreate(chatSeedData);


module.exports = seedChat;