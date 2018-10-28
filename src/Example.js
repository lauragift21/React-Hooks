import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Example() {
  const [count, setCount] = useState(0);

  /* handles lifecycle event just like 
componentDidMount and componentDidUpdate */

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
