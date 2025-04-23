const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userDetails = require("./userDetails")(sequelize, Sequelize.DataTypes);
db.categories = require("./category")(sequelize, Sequelize.DataTypes);
db.vendors = require("./vendors")(sequelize, Sequelize.DataTypes);
db.expenses = require("./expenses")(sequelize, Sequelize.DataTypes);

// Setup associations
Object.values(db).forEach(model => {
    if (model.associate) model.associate(db);
});

module.exports = db;
