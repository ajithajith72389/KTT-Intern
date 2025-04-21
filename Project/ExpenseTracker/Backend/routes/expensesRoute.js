const express = require("express");
const router = express.Router();
const expenses = require("../models/expenses");

router.post("/add-expenses", async (req, res) => {
    const {vendor, categoryType, quantity, price, addedBy} = req.body;

    try {
        const addExpense = await expenses.create({
            vendor,
            categoryType,
            quantity,
            price,
            addedBy
        })
        res.status(201).json({message: "Expense added Successfully"})
    } catch (error) {
        res.status(500).json({error : error});
        
    }
})

module.exports = router;