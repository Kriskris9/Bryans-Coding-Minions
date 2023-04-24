const sequelize = require('../config/connection');
const { Networking } = require('../models');

const networkingData = [
  {
    "location": "New York City",
    "link": null,
    "event_name": "Tech Meetup NYC",
    "date": "2023-05-25",
    "photo": null
  },
  {
    "location": "San Francisco",
    "link": null,
    "event_name": "SF Developer Conference",
    "date": "2023-06-10",
    "photo": null
  },
  {
    "location": "Berlin",
    "link": null,
    "event_name": "Berlin React Summit",
    "date": "2023-09-12",
    "photo": null
  },
  {
    "location": "London",
    "link": null,
    "event_name": "London Python Workshop",
    "date": "2023-11-08",
    "photo": null
  },
  {
    "location": "Tokyo",
    "link": null,
    "event_name": "Tokyo AI Expo",
    "date": "2024-02-20",
    "photo": null
  },
  {
    "location": "Sydney",
    "link": null,
    "event_name": "Sydney Blockchain Weekend",
    "date": "2024-04-15",
    "photo": null,
  },
];

const seedNetworking = () => Networking.bulkCreate(networkingData);

module.exports = seedNetworking;