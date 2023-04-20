const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    "username": "JohnDoe",
    "email": "john@example.com",
    "password": "password1",
  },
  {
    "username": "JaneDoe",
    "email": "jane@example.com",
    "password": "password2",
  },
  {
    "username": "Alice",
    "email": "alice@example.com",
    "password": "password3",
  },
  {
    "username": "Bob",
    "email": "bob@example.com",
    "password": "password4",
  },
  {
    "username": "Charlie",
    "email": "charlie@example.com",
    "password": "password5",
  },
  {
    "username": "Eva",
    "email": "eva@example.com",
    "password": "password6",
  },
];

const seedUsers = async () => {
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  };
  
module.exports = seedUsers;
