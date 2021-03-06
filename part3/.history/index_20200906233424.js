const express = require("express");
const app = express();
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];
const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;
  return maxId + 1;
};
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id == id);
  console.log(note);
  if (note) res.json(note);
  else res.status(404).end();
});
app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  notes = notes.filter((note) => note.id != id);
  res.status(204).end();
});
app.post("/api/notes", (req, res) => {
  const note = req.body;
  note.id = generateId();
  console.log(note, "helloworld");
  res.json(note);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("12321");
});
