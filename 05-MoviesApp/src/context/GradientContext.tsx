import React, { createContext, useState } from 'react';
import { useCallback } from 'react';

export const GradientContext = createContext({} as ContextProps);

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  updateColors: (colors: ImageColors) => void;
  updatePreviousColors: (colors: ImageColors) => void;
}

export const GradientProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const updateColors = useCallback((newColors: ImageColors) => {
    setColors(newColors);
  }, []);

  const updatePreviousColors = useCallback((newColors: ImageColors) => {
    setPreviousColors(newColors);
  }, []);

  return (
    <GradientContext.Provider
      value={{ colors, previousColors, updateColors, updatePreviousColors }}
    >
      {children}
    </GradientContext.Provider>
  );
};
