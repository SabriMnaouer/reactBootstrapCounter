import React from "react";
import Counter from "./Counter";

const DoubleCounter = () => {
  const [count, setCount] = React.useState(0);
  const cardStyle = {
    border: "1px solid #6962AD",
    borderRadius: "20px",
    padding: "5px",
    width: "200px",
    margin: "auto",
  };
  return (
    <div>
      <h1
        style={{
          backgroundColor: "orange",
          color: "white",
        }}>
        {" "}
        DoubleCounter Page{" "}
      </h1>
      <div>
        <div style={cardStyle}>
          <Counter name="one" count={count} setCount={setCount} />
        </div>
        <div style={cardStyle}>
          <Counter name="two" count={count} setCount={setCount} />
        </div>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            marginLeft: "8px",
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "100px",
          }}>
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          style={{
            marginLeft: "8px",
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "100px",
          }}>
          -
        </button>
      </div>
    </div>
  );
};

export default DoubleCounter;
