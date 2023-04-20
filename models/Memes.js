const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Memes extends Model {}

Memes.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    gif: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    }
  },


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'memes', 
  }
);

module.exports = Memes;