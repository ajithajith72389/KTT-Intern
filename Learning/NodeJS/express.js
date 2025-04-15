const express = require("express");
const app = express();

const PORT = 3000;


// GET route
app.get('/', (req, res) => {
    res.send("Hi , I'm a server!");
})


// About route
app.get('/about', (req, res) =>{
    res.send("About Ajith");
})

// contact route
app.get('/contact', (req, res) =>{
    res.send("Contact Ajith");
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})


// POST route

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Hello ${name} , your email is ${email}`);
})