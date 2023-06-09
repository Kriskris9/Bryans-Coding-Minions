const seedUsers = require('./seedUsers');
const seedNetworking = require('./seedNetworking');
const seedMemes = require('./seedMemes');
const seedStudy = require('./seedStudy');
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