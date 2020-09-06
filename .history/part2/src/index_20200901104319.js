import React, { useState } from "react";
import ReactDOM from "react-dom";

const notes = [
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

const App = (props) => {
  const { notes } = props;
  return (
    <div>
      <h1>notes</h1>
      <ul>
        {notes.map((note) => {
          return <li>{notes.content}</li>;
        })}
      </ul>
    </div>
  );
};

ReactDOM.render(<App nodes={nodes}></App>, document.getElementById("root"));
