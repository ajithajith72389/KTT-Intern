const express = require("express");
const router = express.Router();
const { createTypeofExpense, getTypeofExpense, updateTypeofExpense, deleteTypeofExpense } = require("../controllers/categoryController")
// const { categories } = require("../models");
// const { where } = require("sequelize");


router.post("/categories", createTypeofExpense);

router.get("/categories", getTypeofExpense);

router.patch("/categories/:id", updateTypeofExpense);

router.delete("/categories/:id", deleteTypeofExpense);


module.exports = router;


