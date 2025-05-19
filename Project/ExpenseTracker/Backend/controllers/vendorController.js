// const express = require("express");
// const router = express.Router();
const { vendors } = require("../models");

const createVendor = (async (req, res,) => {
    const { typeofExpense, vendor, contactPerson, contactNumber, address } = req.body;
    try {
        const newVendor = await vendors.create({
            typeofExpense,
            vendor,
            contactPerson,
            contactNumber,
            address
        })
        res.status(201).json({
            // status: "success",
            success: true,
            result: newVendor
        });

    } catch (error) {
        res.status(500).json({
            // status: "error",
            success: false,
            message: error.message
        });
    }
});


const getVendor = (async (req, res) => {
    try {
        const getVendors = await vendors.findAll({})
        res.status(200).json({
            // status: "success",
            success: true,
            results: getVendors.length,
            data: {
                result: getVendors
            }
        })

    } catch (error) {
        res.status(500).json({
            // status: "error",
            success: false,
            message: error.message
        });
    }
});


const updateVendor = (async (req, res) => {
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
            return res.status(404).json({
                // status: "fail",
                success: false,
                message: "Vendor not found"
            })
        }
        return res.json({
            // status: "success",
            success: true,
            result: updateVendor
        })
    }
    catch (error) {
        res.status(500).json({
            // status: "error",
            success: false,
            message: error.message
        });

    }
});


const deleteVendor = (async (req, res) => {
    try {
        const deleteVendor = await vendors.destroy({ where: { id: req.params.id } });
        if (!deleteVendor) {
            return res.status(404).json({
                // status: "fail",
                success: false,
                message: "Vendor not found"
            })
        }
        res.json({ message: "Vendor deleted successfully" })
    } catch (error) {
        res.status(500).json({
            // status: "error",
            success: false,
            message: error.message
        });
    }
});


module.exports = {
    getVendor,
    updateVendor,
    deleteVendor,
    createVendor
}