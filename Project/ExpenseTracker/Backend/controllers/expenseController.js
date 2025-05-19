const { expenses } = require("../models");

const getExpenses = (async (req, res) => {
    try {
        const getAllExpenses = await expenses.findAll();
        const result = getAllExpenses;
        res.json({status: "success", result})

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Expenses" });
    }
});


const createExpenses = (async (req, res) => {
    const { typeofExpense, vendor, vendorPerson, contactNumber, quantity, price, addedBy } = req.body;
    try {
        const data = await expenses.create({
            typeofExpense,
            vendor,
            vendorPerson,
            contactNumber,
            quantity,
            price,
            addedBy
        });

        const result = data;
        res.status(201).json({status: "success", result});
    } catch (err) {
        console.error("🔥 Expense creation failed:", err);
        res.status(400).json({ message: "Failed to create expense", error: err });
    }
});


const updateExpenses = (async (req, res) => {
    const { vendor, vendorPerson, contactNumber, quantity, typeofExpense, price, addedBy } = req.body;
    try {

        const updated = await expenses.update({
            vendor,
            vendorPerson,
            contactNumber,
            quantity,
            typeofExpense,
            price,
            addedBy

        }, { where: { id: req.params.id } })

        if (updated[0] === 0) {
            return res.status(404).json({ message: "Expense not found" })
        }
        const result = updated;
        res.json({ status: "success", result });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Expenses" });
    }
});


const deleteExpenses = (async (req, res) => {
    try {
        const deleted = await expenses.destroy({ where: { id: req.params.id } });

        if (!deleted) {
            return res.status(404).json({ message: "Expense not found" })
        }

        const result = deleted;
        res.json({ statusbar: "success", result });

    } catch (error) {
        res.status(500).jsonp({ error: "Failed to fetch Expenses" })
    }
});


module.exports = {
    getExpenses,
    createExpenses,
    updateExpenses,
    deleteExpenses
}