import React from "react";

const Counter = ({ name, count, setCount }) => {
  return (
    <div>
      <h1>Counter {name} </h1>
      <div style={{ display: "inline-block" }}>
        <h1>{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "8px",
          }}>
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          style={{
            backgroundColor: "blue",
            color: "white",
            marginRight: "8px",
          }}>
          -
        </button>
        <button
          onClick={() => setCount(0)}
          disabled={count === 0}
          style={{
            backgroundColor: "red",
            color: "white",
            marginRight: "8px",
          }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
