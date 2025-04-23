const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("categories", {
        categoryType: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    });

    category.associate = (models) => {
        category.hasMany(models.expenses, {
            foreignKey: 'categoryType',
            sourceKey: 'categoryType',
        });

        category.hasMany(models.vendors, {
            foreignKey: 'categoryType',
            sourceKey: 'categoryType',
        })
    };

    return category;
};