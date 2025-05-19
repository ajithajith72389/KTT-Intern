const { categories} = require("../models");

const createTypeofExpense = ( async(req, res) => {
    console.log(req.body); // Inspect the data from the frontend
    const { typeofExpense, vendor, price } = req.body;

    try {
        const newCategory = await categories.create({ typeofExpense, vendor, price });
        const result = newCategory;
        res.status(201).json({ status: "success", result });
    } catch (error) {
        console.error("Error while adding category:", error);
        res.status(500).json({ error: error.message });
    }
});

const getTypeofExpense = ( async (req, res) => {
    try {
        const allCategories = await categories.findAll();
        const result = allCategories;
        res.json({status: "success", result });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch categories" });
    }
});


const updateTypeofExpense = ( async (req, res) => {
    const { id, typeofExpense, vendor, price } = req.body;
    try {
        const updatedcategory = await categories.update({ id, typeofExpense, vendor, price },
            { where: { id: req.params.id } });

        if (updatedcategory[0] === 0) {
            return res.status(500).json({ message: "TypeofExpense not found" })
        }
        const result = updatedcategory;
        return res.status(201).json({ status: "success", result });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Expenses" });
    }
});


const deleteTypeofExpense = ( async (req, res) => {
    try {
        const deletedcategory = await categories.destroy({ where: { id: req.params.id } });
        if (!deletedcategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        const result = deletedcategory;

        res.json({ status: "success", result });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete typeofExpense" });
    }
});


module.exports = {
    createTypeofExpense,
    getTypeofExpense,
    updateTypeofExpense,
    deleteTypeofExpense
}