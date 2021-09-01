import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LogoImage from '../assets/react-logo-white.png';

export const WhiteLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 100,
  },
});
