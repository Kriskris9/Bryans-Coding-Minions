const seedUsers = require('./user');
const seedNetworking = require('./networking');
const seedMemes = require('./memes');
 const seedStudy = require('./study');
const seedChat = require('./seedChat');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedNetworking();
    await seedMemes();
    await seedStudy();
    await seedChat();
    process.exit(0);
};

seedAll();