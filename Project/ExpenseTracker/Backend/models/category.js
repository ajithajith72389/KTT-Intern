const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const category = sequelize.define("categories", {
    categoryType : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    vendor : {
        type : DataTypes.STRING,
        allowNull: false,
    },

    contactNumber : {
        type : DataTypes.STRING,
        allowNull : false,

    },

    price : {
        type : DataTypes.STRING,
        allowNull: false
    }
    
})


module.exports = category;