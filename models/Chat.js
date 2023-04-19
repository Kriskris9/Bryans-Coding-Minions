const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chat extends Model {
}

Chat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gif: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        video: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chat',
    }
);

module.exports = Chat;