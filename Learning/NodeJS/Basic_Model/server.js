const express = require("express");
const app = express()

const sequelize = require("./config/database");
const User = require("./models/User");

app.use(express.json());

// sequelize.sync()
//     .then(() =>{
//         console.log("database synced!")
//         return User.create({name: "Aj", email: "aj@gmail.com", age : 20});
//     })
//     .then((user) => {
//         console.log("user created:", user.toJSON());
//         app.listen(3000, () => {
//             console.log("Server running on port 3000");


//         })
//     })
//     .catch((err) => {
//         console.log(err);

//     })

// FindAll
(async () => {
    try {
        await sequelize.sync({alter: true});

        //create user
        const user = await User.create({ name: "Aji", email: "aji@gmail.com", age:21, dob:'2025-01-01' });

        // findAll()
        const alluser = await User.findAll();
        console.log("All users data:", alluser.map(user => user.toJSON()));

        // findOne
        const findOne = await User.findOne({ where: { name: "AK" } });
        console.log("Find one user data:", findOne?.toJSON());

        //findByPk()
        const pkUser = await User.findByPk(3);
        console.log("User by PK 2: ", pkUser?.toJSON());

        //update Model
        // const updateUser = await User.findOne({ where: { name: "Aji" } });
        // updateUser.name = "Ajith Kumar";
        // await updateUser.save();

        //destroy Model
        // await User.destroy({where: { name: "Aj"}});
        // console.log("User deleted!");


        // const delUser = await User.findOne({ where: { name: "Ajith" } });

        // if (delUser) {
        //     delUser.destroy();
        //     console.log("User deleted!", delUser?.toJSON());
        // } else {
        //     console.log("User not found");
        // }

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    } catch (err) {
        console.error("Error:", err);
    }
})();