// Example in Node.js with Sequelize ORM

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/mydb');

// Define a User model (this maps to the 'users' table)
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'users',  // Specifies the name of the table in the database
    timestamps: false     // Optional: Disable timestamps if your table doesn't have createdAt and updatedAt columns
});

// Sync models with the database (create the table if it doesn't exist)
sequelize.sync()
    .then(() => console.log('Database synchronized with ORM'))
    .catch(err => console.error('Error syncing database:', err));


// Creating a new user
User.create({
    name: 'Alice',
    email: 'alice@example.com',
    age: 30
}).then(user => {
    console.log('New user created:', user);
});

// Finding a user by ID
User.findByPk(1).then(user => {
    console.log('User found:', user);
});

// Updating a user's age
User.update({ age: 31 }, {
    where: { id: 1 }
}).then(() => {
    console.log('User age updated');
});

// Deleting a user
User.destroy({
    where: { id: 1 }
}).then(() => {
    console.log('User deleted');
});
