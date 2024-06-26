import { useState } from "react";

const CounterWithFunction = () => {
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <button
      onClick={() => {
        setCount(count + 5);
      }}
    >
      {count}
    </button>
  );
};

export default CounterWithFunction;
