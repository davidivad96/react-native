import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { fadeIn, fadeOut, startMovingPosition, opacity, position } =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity,
            transform: [
              {
                translateY: position,
              },
            ],
          },
        ]}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
