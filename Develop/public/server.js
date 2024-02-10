const fs = require("fs");
const express = require("express");
const path = require("path");
const cuid = require("cuid");

//Json file and sets noteData

const noteData = require("./db/db.json");
const PORT = process.env.PORT || 3001;

// app initialization 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
