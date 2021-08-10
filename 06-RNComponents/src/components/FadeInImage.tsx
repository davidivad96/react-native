import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
}

export const FadeInImage = ({ uri }: Props) => {
  const { opacity, fadeIn } = useAnimation();

  return (
    <Animated.Image
      source={{ uri }}
      style={[styles.image, { opacity }]}
      onLoad={() => fadeIn(500)}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
  },
});
