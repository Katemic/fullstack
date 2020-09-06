import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Axios from "axios";

const App = () => {
  const [notes, setNotes] = useState();
  const [newNote, setNewNote] = useState("input a new note");
  const [showAll, setShowAll] = useState(true);
  let hook = () => {
    Axios.get("https://localhost:3001/notes").then((res) => {
      setNotes(res.data);
    });
  };
  useEffect(hook, []);
  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    console.log(notes);
    setNotes(notes.concat(newNoteObject));
    setNewNote("");
  };
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const handleNoteShow = (e) => {
    setShowAll(!showAll);
    console.log(notesToShow);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((item) => item.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleNoteShow}>
          show{showAll ? "showALL" : "important"}
        </button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">submit</button>
      </form>
      <ul>
        {notesToShow.map((note) => (
          <Note note={note} key={note.id}></Note>
        ))}
      </ul>
    </div>
  );
};

export default App;
