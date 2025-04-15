const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const User = sequelize.define("User", {
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    age : {
        type : DataTypes.INTEGER
    }
})


module.exports = User;