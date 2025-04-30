const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
// const category = require("./category");

module.exports = (sequelize, DataTypes) => {
    const vendors = sequelize.define("vendors", {
        vendor: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        typeofExpense: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactPerson: DataTypes.STRING,
        contactNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    vendors.associate = (models) => {
        vendors.hasMany(models.expenses, {
            foreignKey: 'vendor',
            sourceKey: 'vendor',
            as: 'vendorExpenses'
        })

        vendors.belongsTo(models.categories, {
            foreignKey: 'vendor',
            targetKey: 'vendor',
            as: 'vendorCategory'
        });

    }

    return vendors;
}