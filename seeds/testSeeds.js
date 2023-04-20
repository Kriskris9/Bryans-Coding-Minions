const sequelize = require('../config/connection');
const Chat = require('../models/Chat');

const chatSeedData = [
  {
    user_name: 'coder1',
    message: `Why do Java developers wear glasses? Because they don't C#!`,
    photo: 'https://i.imgur.com/z9jU7E6.jpg'
  },
  {
    user_name: 'coder2',
    message: `How many programmers does it take to change a light bulb? None, that's a hardware problem.`,
    gif: 'https://media.giphy.com/media/AuwBPJztsEWkw/giphy.gif'
  },
  {
    user_name: 'coder1',
    message: 'I would tell you a UDP joke, but you might not get it.',
    video: 'https://www.youtube.com/watch?v=AFxLA_xt7LM',
  },
  {
    user_name: 'coder2',
    message: `There are 10 types of people in this world: Those who understand binary and those who don't.`,
    photo: 'https://i.imgur.com/Xu5bqYC.jpg',
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const chat of chatSeedData) {
    await Chat.create(chat);
  }
  console.log('Database seeded!');
  process.exit(0);
};

seedDatabase();