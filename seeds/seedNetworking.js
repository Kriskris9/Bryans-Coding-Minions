const sequelize = require('../config/connection');
const { Networking } = require('../models');

const networkingData = [
  {
    "location": "New York City",
    "link": "https://www.example.com/event1",
    "event_name": "Tech Meetup NYC",
    "date": "2023-05-25",
    "photo": "https://www.example.com/event1.jpg"
  },
  {
    "location": "San Francisco",
    "link": "https://www.example.com/event2",
    "event_name": "SF Developer Conference",
    "date": "2023-06-10",
    "photo": "https://www.example.com/event2.jpg"
  },
  {
    "location": "Berlin",
    "link": "https://www.example.com/event3",
    "event_name": "Berlin React Summit",
    "date": "2023-09-12",
    "photo": "https://www.example.com/event3.jpg"
  },
  {
    "location": "London",
    "link": "https://www.example.com/event4",
    "event_name": "London Python Workshop",
    "date": "2023-11-08",
    "photo": "https://www.example.com/event4.jpg"
  },
  {
    "location": "Tokyo",
    "link": "https://www.example.com/event5",
    "event_name": "Tokyo AI Expo",
    "date": "2024-02-20",
    "photo": "https://www.example.com/event5.jpg"
  },
  {
    "location": "Sydney",
    "link": "https://www.example.com/event6",
    "event_name": "Sydney Blockchain Weekend",
    "date": "2024-04-15",
    "photo": "https://www.example.com/event6.jpg",
  },
];

const seedNetworking = () => Networking.bulkCreate(networkingData);

module.exports = seedNetworking;