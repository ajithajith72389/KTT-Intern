const express = require("express");
const router = express.Router();
const { getExpenses, createExpenses, updateExpenses, deleteExpenses } = require("../controllers/expenseController");


router.get("/expenses", getExpenses);

router.post("/expenses", createExpenses);

router.patch("/expenses/:id", updateExpenses);

router.delete("/expenses/:id", deleteExpenses);


module.exports = router;