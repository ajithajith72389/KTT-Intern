const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("categories", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        typeofExpense: {
            type: DataTypes.STRING
            
        },
        vendor : {
            type: DataTypes.STRING,
            primaryKey: true
        },
        price: DataTypes.INTEGER
    });

    category.associate = (models) => {
        category.hasMany(models.expenses, {
            foreignKey: 'vendor',
            sourceKey: 'vendor',
        });

        category.hasMany(models.vendors, {
            foreignKey: 'vendor',
            sourceKey: 'vendor',
        })
    };

    return category;
};