const { categories} = require("../models");

const createTypeofExpense = ( async(req, res) => {
    console.log(req.body); // Inspect the data from the frontend
    const { typeofExpense, vendor, price } = req.body;

    try {
        const newCategory = await categories.create({ typeofExpense, vendor, price });
        res.status(201).json({ 
            status: "success",
            result : newCategory
         });
    } catch (error) {
        //console.error("Error while adding category:", error);
        res.status(500).json({ 
            status: "error",
            message : error.message
         });
    }
});

const getTypeofExpense = ( async (req, res) => {
    try {
        const allCategories = await categories.findAll();
        res.status(200).json({
            status: "success",
            results: allCategories.length,
            data : {
                result : allCategories
            }
        });
    } catch (err) {
        res.status(500).json({ 
            status: "error",
            message : err.message
         });
    }
});


const updateTypeofExpense = ( async (req, res) => {
    const { id, typeofExpense, vendor, price } = req.body;
    try {
        const updatedcategory = await categories.update({ id, typeofExpense, vendor, price },
            { where: { id: req.params.id } });

        if (updatedcategory[0] === 0) {
            return res.status(500).json({ 
                status: "fail",
                message: "Type of Expense not found" })
        }
        return res.status(201).json({ 
            status : "success",
            result : updatedcategory
         });

    } catch (error) {
        res.status(500).json({ 
            status: "error",
            message : error.message
         });
    }
});


const deleteTypeofExpense = ( async (req, res) => {
    try {
        const deletedcategory = await categories.destroy({ where: { id: req.params.id } });
        if (!deletedcategory) {
            return res.status(404).json({ 
                status: "fail",
                message: "Type of Expense not found" });
        }

        res.json({ 
            status: "success",
            message: "Type of Expense deleted successfully"
         });
    } catch (error) {
        res.status(500).json({ 
            status: "error",
            message : error.message
         });
    }
});


module.exports = {
    createTypeofExpense,
    getTypeofExpense,
    updateTypeofExpense,
    deleteTypeofExpense
}