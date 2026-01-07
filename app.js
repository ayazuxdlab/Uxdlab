const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("UXDLAB AUTO DEPLOY VERSION 3.0");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server started on port 3000");
});