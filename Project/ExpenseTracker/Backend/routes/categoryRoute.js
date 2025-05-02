const express = require("express");
const router = express.Router();
const { categories } = require("../models");

// Get all categories
router.get("/get-category", async (req, res) => {
    try {
        const getAllCategory = await categories.findAll();
        res.status(200).json(getAllCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

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



module.exports = router;
