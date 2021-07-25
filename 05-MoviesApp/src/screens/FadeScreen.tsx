import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade(0);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity }]} />
      <Button title="Fade In!" onPress={() => fadeIn()} />
      <Button title="Fade Out!" onPress={() => fadeOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
  },
});
