const jwt = require("jsonwebtoken");

const autheticate = (req, res, next) => {
    const token = req.headers['authorization']

    if(!token){
        return res.status(500).json({error: "Access denied"});
    }

    try {
        const verified = jwt.verify(token, 'superToken');
        req.userId = verified.userId;
        next();
    } catch (error) {
        return res.status(500).json({error: "Invalid Token"})
    }
}


app.get('/protected', autheticate, (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
})

module.exports = autheticate;