module.exports = (sequelize, DataTypes) => {
    const userDetails = sequelize.define("userDetails", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        empID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique : true
        },
        password: DataTypes.STRING,
    });

    userDetails.associate = (models) => {
        userDetails.hasMany(models.expenses, {
            foreignKey: 'addedBy',
            sourceKey: 'name',
        });
    };

    return userDetails;
};





// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// const userDetails = sequelize.define("userDetails", {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },

//     empID: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey: true
//     },

//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// })

// userDetails.associate = (models) => {
//     userDetails.hasMany(models.expenses, {
//         foreignKey: 'addedBy',
//         sourceKey: 'empID',
//     });
// };


// module.exports = userDetails;
