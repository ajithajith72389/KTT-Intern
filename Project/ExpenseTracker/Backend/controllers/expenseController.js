const { expenses } = require("../models");

const getExpenses = (async (req, res) => {
    try {
        const getAllExpenses = await expenses.findAll();
        res.status(200).json({
            //status: 'success',
            success: true,
            results: getAllExpenses.length,
            data: {
                result: getAllExpenses,
            },
        });

    } catch (error) {
        res.status(500).json({
            // status: "error",
            success: false,
            message: error.message
        });
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
        res.status(201).json({
            //status: 'success',
            success: true,
            result: data
        });
    } catch (err) {
        //console.error("🔥 Expense creation failed:", err);
        res.status(400).json({
            // status: 'error',
            success: false,
            message: err.message
        });
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
            return res.status(404).json({
                // status: 'fail',
                success: false,
                message: 'Expense not found'
            })
        }
        res.json({
            // status: 'success',
            success: true,
            result: updated
        })

    } catch (error) {
        res.status(500).json({
            // status: "error",
            success: false,
            message: error.message
        });
    }
});


const deleteExpenses = (async (req, res) => {
    try {
        const deleted = await expenses.destroy({ where: { id: req.params.id } });

        if (!deleted) {
            return res.status(404).json({
                // status: "fail",
                success: false,
                message: "Expense not found"
            });
        }
        res.json({
            // status: "success",
            success: true,
            message: "Expense deleted successfully"
        });

    } catch (error) {
        res.status(500).jsonp({
            // status: "error",
            success: false,
            message: error.message
        });
    }
});


module.exports = {
    getExpenses,
    createExpenses,
    updateExpenses,
    deleteExpenses
}