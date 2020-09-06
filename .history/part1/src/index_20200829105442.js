import React, { useState } from "react";
import ReactDom from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);
  return <div>{counter}</div>;
};

ReactDOM.render(<App></App>, document.getElementById("root"));
