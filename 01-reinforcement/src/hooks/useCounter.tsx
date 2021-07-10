import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [value, setValue] = useState<number>(initialValue);

  const incrementValue = () => {
    setValue((currentValue) => currentValue + 1);
  };

  const decrementValue = () => {
    setValue((currentValue) => currentValue - 1);
  };

  return {
    value,
    incrementValue,
    decrementValue,
  };
};
