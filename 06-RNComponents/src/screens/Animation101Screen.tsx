import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { fadeIn, fadeOut, startMovingPosition, opacity, position } =
    useAnimation();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity,
            transform: [
              {
                translateY: position,
              },
            ],
            backgroundColor: theme.colors.primary,
          },
        ]}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
        color={theme.colors.primary}
      />
      <Button
        title="Fade Out"
        onPress={() => fadeOut()}
        color={theme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
