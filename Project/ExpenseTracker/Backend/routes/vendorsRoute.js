const express = require("express");
const router = express.Router();
const { vendors } = require("../models");

router.post("/vendors", async(req, res,) =>{
    const { typeofExpense, vendor,contactPerson,  contactNumber, address } = req.body;
    try {
        const newVendor = await vendors.create({
            typeofExpense,
            vendor,
            contactPerson,
            contactNumber,
            address
        })
        res.status(201).json({message: "Vendor added successfully", newVendor});
        
    } catch (error) {
        res.status(500).json({error: error.message, details: error.error});
    }
})

router.get("/vendors", async(req, res) =>{
    try {
        const getVendors = await vendors.findAll({})
        res.status(200).json(getVendors)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;