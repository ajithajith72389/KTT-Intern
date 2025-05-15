const express = require("express");
const router = express.Router();
const { categories } = require("../models");
const { where } = require("sequelize");

// Get all categories
// router.get("/get-category", async (req, res) => {
//     try {
//         const getAllCategory = await categories.findAll();
//         res.status(200).json(getAllCategory);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// Add a new category
router.post("/categories", async (req, res) => {
    console.log(req.body); // Inspect the data from the frontend
    const { typeofExpense, vendor, price } = req.body;

    try {
        const newCategory = await categories.create({ typeofExpense, vendor, price });
        res.status(201).json({ message: "Category added successfully" });
    } catch (error) {
        console.error("Error while adding category:", error);
        res.status(500).json({ error: error.message });
    }
});


// Fetch all categories
router.get("/categories", async (req, res) => {
    try {
        const allCategories = await categories.findAll();
        res.json(allCategories);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch categories" });
    }
});


router.patch('/categories/:id', async (req, res) => {
    const { id, typeofExpense, vendor, price } = req.body;
    try {
        const updatedcategory = await categories.update({ id, typeofExpense, vendor, price },
            { where: { id: req.params.id } });

        if (updatedcategory[0] === 0) {
            return res.status(500).json({ message: "TypeofExpense not found" })
        }
        return res.status(201).json({ message: "Type of expense updated successfully" });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Expenses" });
    }
})


router.delete("/categories/:id", async (req, res) => {
    try {
        const deletedcategory = await categories.destroy({ where: { id: req.params.id } });
        if (!deletedcategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({ message: "TypeofExpense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete typeofExpense" });
    }
})

module.exports = router;
