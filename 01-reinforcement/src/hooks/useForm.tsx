import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = (value: string, field: keyof T) => {
    setState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  return {
    state,
    onChange,
  };
};
