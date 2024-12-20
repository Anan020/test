const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "register"
})
app.listen(3001, () => {
    console.log("Server running on port 3001");
})