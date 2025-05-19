const express = require("express");
const router = express.Router();
const { createVendor, updateVendor, getVendor, deleteVendor } = require("../controllers/vendorController");



router.get("/vendors", getVendor);

router.post("/vendors", createVendor);

router.patch("/vendors/:id", updateVendor);

router.delete("/vendors/:id", deleteVendor);

module.exports = router;



