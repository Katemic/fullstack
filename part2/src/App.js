import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/note";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("input a new note");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("some error happened...");

  const hook = () => {
    noteService.getAll().then((notes) => {
      setNotes(notes);
    });
  };
  useEffect(hook, []);
  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    noteService.create(newNoteObject).then((res) => {
      setNotes(notes.concat(res.data));
      setNewNote("");
    });
  };
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const handleNoteShow = (e) => {
    setShowAll(!showAll);
    console.log(notesToShow);
  };
  const toggleImportanceOf = (id) => {
    console.log("importance of " + id + " needs to be toggled");
    const note = notes.find((item) => item.id === id);
    const changedNote = { ...note, important: !note.important };
    noteService
      .update(id, changedNote)
      .then((res) => {
        setNotes(notes.map((note) => (note.id !== id ? note : res.data)));
      })
      .catch((err) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((item) => item.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
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
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => toggleImportanceOf(note.id)}
          ></Note>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default App;
