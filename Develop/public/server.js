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


app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "db/db.json")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.post("/api/notes", (req, res) => {
    const body = JSON.stringify(req.body);
    console.log(body);
  
    //new note and unique id
    const { title, text } = req.body;
    const newNote = {
      title,
      text,
      id: cuid(),
    }}); 



    fs.writeFile(
        "./db/db.json",
        JSON.stringify(notesList),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info("A new note has been successfully added.")
      );
      console.log(notesList);
  res.json(newNote);


  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const notesList = JSON.parse(data);

      notesList.push(newNote)
    }});


    app.listen(PORT, () =>
    console.log(`Note taker app listening at http://localhost:${PORT}`)
  );