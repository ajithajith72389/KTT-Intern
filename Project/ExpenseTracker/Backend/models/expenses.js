const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const expenses = sequelize.define("expenses", {
    vendor : {
        type : DataTypes.STRING,
        allowNull : false
    },

    categoryType : {
        type : DataTypes.STRING,
        allowNull : false
    },

    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    price : {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    addedBy : {
        type : DataTypes.STRING,
        allowNull : false
    }
})


module.exports = expenses;