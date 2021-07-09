import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const incrementValue = () => {
    setValue((val) => val + 1);
  };

  const decrementValue = () => {
    setValue((val) => val - 1);
  };

  return (
    <>
      <h3>
        Counter: <small>{value}</small>
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
