// http
var http = require('http');
var dt = require("./myfirstmodule");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hi Swetha")
    // res.write("The date and time are currently: " + dt.myDateTime())
    res.end();
}).listen(8000, () => {
    console.log("Server running at http://127.0.0.1:8000/");
});


// fs
const fs = require("fs");
const data = fs.readFileSync("./Project_Explanation.txt", "utf8");
console.log(data);

fs.writeFileSync("output.txt", "Hello from node.js");


// Path

const path = require("path");
const filePath = path.join(__dirname, "files", "./output.txt");
console.log(filePath);

console.log(path.basename(filePath));


// Reading Files (Async)
console.log("***Reading Files (Async)***");

fs.readFile("./Project_Explanation.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})



// Reading Files stream based
console.log("***Reading Files stream based***");
const readStream = fs.createReadStream('./Project_Explanation.txt', 'utf8');
readStream.on("data", chunk => {
    console.log("Chunk:", chunk);
});



// Writing Files (Async)

console.log("***Writing Files (Async)***");

fs.writeFile("output.txt", "Hey bro... What's up", (err) => {
    if (err) throw err;
    console.log("File written successfully");

});


// Writing Files stream based

const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hi Ajith\n")
writeStream.write("What are you doing?")
writeStream.end();


// Working with Directories
console.log("***Working with Directories***");

fs.readdir("./", (err, files) => {
    if (err) throw err;
    console.log("Files: ", files);
})