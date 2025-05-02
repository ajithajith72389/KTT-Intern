const express = require("express");
const path = require("path");
const db = require("./models");
const userRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoute");
const expenseRoutes = require("./routes/expensesRoute");
const vendorRoutes = require("./routes/vendorsRoute");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../Frontend")));


const PORT = 3000;

db.sequelize.sync().then(() => {
    console.log("DB Synced Successfully");
});

app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", expenseRoutes);
app.use("/api", vendorRoutes);


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../Frontend", "../Frontend/Login.html"));
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
