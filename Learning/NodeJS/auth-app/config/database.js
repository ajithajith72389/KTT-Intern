const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "postgres", "root", {
    lost: "localhost",
    dialect: "postgres"
});


module.exports = sequelize;