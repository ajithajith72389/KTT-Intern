const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoute");
const expenseRouter = require("./routes/expensesRoute");
const app = express();
app.use(express.json());

const PORT = 3000;

sequelize.sync();

app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', expenseRouter);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
})
