const express = require("express");
const sequelize = require("./config/database"); 
const routes = require("./routes/auth"); 

const app = express();
const PORT = 3000;


app.use(express.json());

sequelize.sync()

app.use("/api", routes); 

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});