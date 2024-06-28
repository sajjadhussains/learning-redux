import React from "react";

const ChildComponent = ({ count }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>{count}</h1>
    </div>
  );
};

export default ChildComponent;
