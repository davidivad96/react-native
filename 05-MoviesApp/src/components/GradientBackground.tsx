import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {
  const { colors, previousColors, updatePreviousColors } =
    useContext(GradientContext);
  const { opacity, fadeIn, fadeOut } = useFade(0);

  useEffect(() => {
    fadeIn(() => {
      updatePreviousColors(colors);
      fadeOut();
    });
  }, [colors, fadeIn, fadeOut, updatePreviousColors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary, '#FFF']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#FFF']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.5 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
