const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("ExpenseTracker", "postgres", "root", {
    host : 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;