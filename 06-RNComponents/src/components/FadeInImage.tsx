import React from 'react';
import { Animated, ImageStyle, StyleProp } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();

  return (
    <Animated.Image
      source={{ uri }}
      style={{ ...(style as ImageStyle), opacity }}
      onLoad={() => fadeIn(500)}
    />
  );
};
