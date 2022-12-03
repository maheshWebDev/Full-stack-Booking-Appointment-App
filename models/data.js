const Sequelize = require('sequelize');

const sequelize = require('../config/dbConfig');

const user = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        unique: true,
        allowNull: false
      }
});

module.exports = user;