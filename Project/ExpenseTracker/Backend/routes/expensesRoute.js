// routes/expensesRoute.js
const express = require("express");
const router = express.Router();
const {expenses} = require("../models");

router.post("/addExpense", async (req, res) => {
    const {vendor, categoryType, contactNumber, quantity, price, addedBy} = req.body;
    try {
        const data = await expenses.create({
            vendor,
            categoryType,
            contactNumber,
            quantity,
            price,
            addedBy
        });
        res.status(201).json(data);
    } catch (err) {
        console.error("🔥 Expense creation failed:", err);
        res.status(400).json({ message: "Failed to create expense", error: err });
    }
});

router.get("/expenses", async (req, res) =>{
    try {
        const getAllExpenses = await expenses.findAll();
        res.json(getAllExpenses)
        
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Expenses" });
    }
})

module.exports = router;
