const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Node.js server is running successfully");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server started on port 3000");
    console.log("AUTO DEPLOY TEST SUCCESS");
});