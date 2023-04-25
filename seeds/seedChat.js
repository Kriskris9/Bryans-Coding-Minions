const sequelize = require('../config/connection');
const {Chat}= require('../models');


const chatSeedData = [
  // first one and coder 4 seed data
  {
    "user_name": "Coder1",
    "message": "Why do Java developers wear glasses? Because they don't C#!",
    "photo": "https://cdn.dribbble.com/users/1218634/screenshots/3153009/glasses-see-sharp-joke.png?compress=1&resize=800x600&vertical=top"
  },
  {
    "user_name": "Coder2",
    "message": "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "gif": "https://media.giphy.com/media/AuwBPJztsEWkw/giphy.gif"
  },
  {
    "user_name": "Coder3",
    "message": "Cleaning Up Code Be Like...",
    "photo": "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be7eedf8e1f31aabcec_BwENfmI0CU5dZGYlSyo142mpfG08-rYgTS-Qm47uMUXN6JXtmdZvtzVzTooUQdXTWmTD8uzF9N6XQJA2vUIMi53tunFyVtvOBJTNfOjHit2P_JkTmFzFsK7ep6Vb9781XZnRAryH.png"
  },
  {
    "user_name": "Coder4",
    "message": "Deleting code you thought wasn't useful...",
    "photo": "https://i.pinimg.com/736x/88/b2/b8/88b2b80177c053dfbabc3620683f1af6.jpg"
  },
];


const seedChat = () => Chat.bulkCreate(chatSeedData);


module.exports = seedChat;