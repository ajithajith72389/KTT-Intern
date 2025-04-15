const express = require("express");
const { Sequelize } = require("sequelize");
const User = require("./models/User");
const app = express();

app.use(express.json());

const sequelize = new Sequelize('mydb', 'postgres', 'root', {
    host: "localhost",
    dialect: "postgres"
});

// sequelize.authenticate()
//     .then(() => console.log("Connected to postgres"))
//     .catch(err => console.error(err));

// module.exports = sequelize;

sequelize.sync()
    .then(()=> User.create({name : "Ajith", email : "ajith@gmail.com", age: 20}))
    .then((user) => {console.log("New User:", user.json());
    })

