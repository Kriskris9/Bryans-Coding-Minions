const sequelize = require('../config/connection');
const { Memes } = require('../models');

// memes seeds

const memesData =
[
    {
      "title": "Bugs and Errors in Code",
      "description": " A series of pictures, one that says 25000000 bugs, 25000 erros, and 25 lines of code",
      "photo": "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Jokes-Bugs-Errors-Lines-of-Code.jpg",
      "gif": "",
      "video": "",
      "link": "",
      "user_id": 1
    },
    {
      "title": "When your Program finally works out in the end",
      "description": "A joke about how your code somehow works even though it is a mess",
      "photo": "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code.jpg",
      "gif": "",
      "video": "",
      "link": "",
      "user_id": 2
    },
    {
      "title": "Code Comments Be Like...",
      "description": " A picture of a stop sign with a sign below it saying 'this is a stop sign'",
      "photo": "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like.jpg",
      "gif": "",
      "video": "",
      "link": "",
      "user_id": 3
    },
    {
      "title": "I have no idea what I am doing",
      "description": "A funny gif of a dog typing on the computer",
      "photo": "",
      "gif": "https://giphy.com/embed/Dh5q0sShxgp13DwrvG",
      "video": "",
      "link": "",
      "user_id": 4
    },
    {
        "title": "Debugging your own Code Be Like... ",
        "description": "A funny image of Toby, from the office, titled 'When it has been 7 hours and you still can't understand your own code'",
        "photo": "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Jokes-Coding-Error.jpg",
        "gif": "",
        "video": "",
        "link": "",
        "user_id": 5
      }
  ]


const seedMemes = () => Memes.bulkCreate(memesData);

module.exports = seedMemes;
