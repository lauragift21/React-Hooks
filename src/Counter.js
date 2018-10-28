import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Click me</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
