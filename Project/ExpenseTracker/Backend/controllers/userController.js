const sequelize = require("../config/database");
const User = require("../models/userDetails");

sequelize.sync({alter : true});

exports.createUser = async (req, res)=>{
    try {
        const user = await User.bulkCreate(
            { name: "Ajith V", empID: "614", password: "AjithV614" },
            { name: "Swetha B", empID: "616", password: "Swetha615" },
            { name: "Ragavi D", empID: "615", password: "Ragavi616" },
            { name: "Arunadevi K", empID: "617", password: "Arunadevi617" },
            { name: "Pragushpathi P", empID: "618", password: "Pragushpathi618" },
            { name: "Yaswanth S", empID: "619", password: "Yaswanth619" }
        )

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 

