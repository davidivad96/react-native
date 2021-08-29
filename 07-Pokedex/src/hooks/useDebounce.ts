import { useEffect, useState } from 'react';

export const useDebounce = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [input, time]);

  return debouncedValue;
};
