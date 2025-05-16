const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { userDetails } = require("../models");

router.post('/register', async (req, res) => {
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
})


router.post("/login", async (req, res) => {
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
})

module.exports = router;