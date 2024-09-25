const express =  require("express");
const app = express();

const path = require("path");
console.log();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "Heroes.html"))
});
app.listen(3030, () => {
console.log("Server http://localhost:3030");    
});

