import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appTheme } from '../theme/appTheme';
const PokeballImage = require('../assets/pokeball.png');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={appTheme.container}>
      <Image source={PokeballImage} style={styles.pokeball} />
      <Text style={[appTheme.globalPadding, appTheme.title, { top: top + 20 }]}>
        Pokedex
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokeball: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -100,
    right: -100,
    opacity: 0.3,
  },
});
