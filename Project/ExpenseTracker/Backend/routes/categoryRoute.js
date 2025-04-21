const express = require("express");
const category = require("../models/category");
const router = express.Router();

router.get("/get-category", async (req, res) => {
    try {
        const getAllCategory = await category.findAll()
        res.status(200).json(getAllCategory)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post("/post-category", async (req, res) => {
    const { categoryType, vendor, contactNumber, price } = req.body
    try {
        const newCategory = await category.create({
            categoryType,
            vendor,
            contactNumber,
            price
        })
        res.status(201).json({ message: "Category added Successfully" });
        // console.log(newCategory);
        

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;