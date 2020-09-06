import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("input a new note");
  const [showAll, setShowAll] = useState(true);
  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      contend: newNote,
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
      <ul>
        {notesToShow.map((note) => (
          <Note note={note} key={note.id}></Note>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;