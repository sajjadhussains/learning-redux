import ChildComponent from "./ChildComponent";

const CounterWithFunction = ({ count, setCount }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >
        {count}
      </button>
      <ChildComponent count={count}></ChildComponent>
    </div>
  );
};

export default CounterWithFunction;
