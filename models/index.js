const Chat = require('./Chat');
const Memes = require('./Memes');
const Study = require('./Study');
const User = require('./User');
const Networking = require('./Networking');


User.hasMany(Study, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Study.belongsTo(User, {
  foreignKey: 'user_id'
});


User.hasMany(Memes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


Memes.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Chat, {
  foreignKey: 'user_id',

});

Chat.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Networking, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});



Networking.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Study, Memes, Chat, Networking };
