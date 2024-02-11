const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const newNotes = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('.api/notes', (req, res) => {
  res.json(newNotes.slice(1));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


function createNote(body, notesArray) {
  const notedPerk = body;
  if (!Array.isArray(notesArray))
      notesArray = [];
  
  if (notesArray.length === 0)
      notesArray.push(0);

  body.id = notesArray[0];
  notesArray[0]++;

  notesArray.push(notedPerk);
  fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify(notesArray, null, 2)
  );
  return notedPerk;
}

app.post('/api/notes', (req, res) => {
  const notedPerk = createNote(req.body, allNotes);
  res.json(notedPerk);
});