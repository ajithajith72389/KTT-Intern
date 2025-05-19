const { userDetails } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = ( async (req, res ) => {
    const { name, empID, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        try {
            const newUser = await userDetails.create({
                name,
                empID,
                password: hashedPassword
            })
    
            res.status(201).json({ message: "User Registered Successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
});


const getUser = ( async (req, res ) =>{
    const { empID, password } = req.body;
        try {
            const user = await userDetails.findOne({ where: { empID } });
    
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            const isMatched = await bcrypt.compare(password, user.password);
            
            if (!isMatched) {
                return res.status(404).json({ error: "Invalid password" });
            }
            const token = jwt.sign({ empID: user.empID, name: user.name }, "Hibro", { expiresIn: "5d" });
    
            return res.status(202).json({ message: "Login Successful", token })
        } catch (error) {
            res.status(500).json({ error: "Error in login" });
        }
});


module.exports = {
    createUser,
    getUser
}





















































// const sequelize = require("../config/database");
// const User = require("../models/userDetails");

// sequelize.sync({alter : true});

// exports.createUser = async (req, res)=>{
//     try {
//         const user = await User.bulkCreate(
//             { name: "Ajith V", empID: "614", password: "AjithV614" },
//             { name: "Swetha B", empID: "616", password: "Swetha615" },
//             { name: "Ragavi D", empID: "615", password: "Ragavi616" },
//             { name: "Arunadevi K", empID: "617", password: "Arunadevi617" },
//             { name: "Pragushpathi P", empID: "618", password: "Pragushpathi618" },
//             { name: "Yaswanth S", empID: "619", password: "Yaswanth619" }
//         )

//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// } 

