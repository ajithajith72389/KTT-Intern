const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userDetails = require("../models/user");

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const newUser = await userDetails.create({
            name,
            email,
            password : hashedPassword
        })

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
})


router.post("/login", async (req, res)=> {
    const {email, password} = req.body;
    try {
        const user = await userDetails.findOne({where: {email}})

        if (!user) {
            return res.status(404).json({error: "User not found"})
        }

        const isMatched = await bcrypt.compare(password, user.password) 
        // const isMatched = await password === user.password;

        if (!isMatched) {
            return res.status(404).json({error: "Invalid password"})
        }
        const token = jwt.sign({userId: user.id}, 'superToken', {expiresIn: "1h"});
        return res.status(200).json({message: "Login Successful", token})
        
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
})

module.exports = router