import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { value, incrementValue, decrementValue } = useCounter(100);

  return (
    <>
      <h3>
        Counter with hook: <small>{value}</small>
      </h3>
      <button className="btn btn-primary me-2" onClick={incrementValue}>
        +1
      </button>
      <button className="btn btn-primary" onClick={decrementValue}>
        -1
      </button>
    </>
  );
};
