import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import axios from "axios";
axios.get("https://localhost:3001/notes").then((res) => {
  const notes = res.data;
  ReactDOM.render(<App notes={notes}></App>, document.getElementById("root"));
});