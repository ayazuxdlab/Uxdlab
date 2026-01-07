require('dotenv').config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("UXDLAB AUTO DEPLOY VERSION 5.23.6");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server started on port ${PORT}");
});