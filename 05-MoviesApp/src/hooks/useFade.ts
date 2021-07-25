import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = (initialOpacity: number) => {
  const opacity = useRef(new Animated.Value(initialOpacity)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
