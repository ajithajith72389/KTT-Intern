const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const userDetails = sequelize.define("userDetails", {
    name: {
        type : DataTypes.STRING,
        allowNull: false
    },

    empID : {
        type : DataTypes.STRING,
        allowNull: false,
        unique : true
    },

    password : {
        type : DataTypes.STRING,
        allowNull: false
    }
})

module.exports = userDetails;