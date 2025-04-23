const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// const category = require("./category");
// const userDetails = require("./userDetails");
// const vendors = require("./vendors");


module.exports = (sequelize, DataTypes) => {
    const expenses = sequelize.define("expenses", {
        vendor: DataTypes.STRING,
        categoryType: DataTypes.STRING,
        contactNumber: DataTypes.STRING,
            // validate: { isNumeric: true }
        quantity: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        addedBy: DataTypes.STRING,
    });

    expenses.associate = (models) => {
        expenses.belongsTo(models.userDetails, {
            foreignKey: 'addedBy',
            targetKey: 'empID',
        });

        expenses.belongsTo(models.categories, {
            foreignKey: 'categoryType',
            targetKey: 'categoryType',
        });

        expenses.belongsTo(models.vendors, {
            foreignKey: 'vendor',
            targetKey: 'vendor',
            as: 'expenseVendor'
        });
    };


    return expenses;
};