const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define("User", {
        name : {
            type : DataTypes.String,
            allowNull: false
        },
        email : {
            type : DataTypes.String,
            allowNull: false
        },
        age : {
            type : DataTypes.Integer,

        }
    })

    return User;
}