const express = require("express");
const router = express.Router();
const { vendors } = require("../models");
const { where } = require("sequelize");

router.post("/vendors", async (req, res,) => {
    const { typeofExpense, vendor, contactPerson, contactNumber, address } = req.body;
    try {
        const newVendor = await vendors.create({
            typeofExpense,
            vendor,
            contactPerson,
            contactNumber,
            address
        })
        res.status(201).json({ message: "Vendor added successfully", newVendor });

    } catch (error) {
        res.status(500).json({ error: error.message, details: error.error });
    }
})

router.get("/vendors", async (req, res) => {
    try {
        const getVendors = await vendors.findAll({})
        res.status(200).json(getVendors)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.patch('/vendors/:id', async (req, res) => {
    const { typeofExpense, vendor, contactNumber, contactPerson, address } = req.body;
    try {
        const updateVendor = await vendors.update({
            typeofExpense,
            vendor,
            contactNumber,
            contactPerson,
            address
        }, { where: { id: req.params.id } })
        if (updateVendor[0] === 0) {
            return res.status(404).json({ message: 'Vendor not found' })
        }
        return res.json({ message: 'Vendor updated' })
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch Expenses" });

    }

})


router.delete("/vendor/:id", async (req, res) => {
    try {
        const deleteVendor = await vendors.destroy({ where: { id: req.params.id } });
        if (!deleteVendor) {
            return res.status(404).json({ message: 'Vendor not found' })
        }
        res.json({ message: "Vendor deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed to delete vendor" });
    }
})

module.exports = router;