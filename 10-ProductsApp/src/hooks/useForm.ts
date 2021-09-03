import { useCallback, useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = useCallback((value: string, field: keyof T) => {
    setState(currentState => ({
      ...currentState,
      [field]: value,
    }));
  }, []);

  const setFormValue = useCallback((form: T) => {
    setState(form);
  }, []);

  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};
