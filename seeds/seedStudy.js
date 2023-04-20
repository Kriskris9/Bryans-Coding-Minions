const sequelize = require('../config/connection');
const {Study}= require('../models');

// seeds data'

const studySeedData = [
    {
      "tip": "Break problems into smaller parts",
      "link": "https://www.freecodecamp.org/",
      "photo": null,
      "gif": null,
      "video": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      "user_id": 1,
    },
    {
      "tip": 'Use meaningful variable and function names',
      "link": 'https://www.codecademy.com/',
      "photo": null,
      "gif": null,
      "video": 'https://www.youtube.com/watch?v=IHzHw1MkK_A',
      "user_id": 2,
    },
    {
      "tip": "Practice daily to improve your skills",
      "link": "https://leetcode.com/",
      "photo": null,
      "gif": null,
      "video": 'https://www.youtube.com/watch?v=3aGSqasVPsI',
      "user_id": 3,
    },
    {
      "tip": 'Learn by teaching others',
      "link": 'https://stackoverflow.com/',
      "photo": null,
      "gif": null,
      "video": 'https://www.youtube.com/watch?v=vxo_WaLhync',
      "user_id": 4,
    },
    {
      "tip": 'Seek feedback from peers and mentors',
      "link": 'https://www.codewars.com/',
      "photo": null,
      "gif": null,
      "video": 'https://www.youtube.com/watch?v=gWmRkYsLzB4',
      "user_id": 5,
    },
    {
      "tip": 'Keep up with industry trends and best practices',
      "link": 'https://dev.to/',
      "photo": null,
      "gif": null,
      "video": 'https://www.youtube.com/watch?v=EFv0ghT8mJw',
      "user_id": 6,
    },
  ];

const seedStudy = () => Study.bulkCreate(studySeedData);


module.exports = seedStudy;