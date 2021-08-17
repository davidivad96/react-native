import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { appTheme } from '../theme/appTheme';
const PokeballImage = require('../assets/pokeball.png');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemons, loadPokemons } = usePokemonPaginated();

  console.log('pokemons: ', pokemons);
  return (
    <View style={appTheme.container}>
      <Image source={PokeballImage} style={styles.pokeball} />
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.picture }} style={styles.pokemonPicture} />
        )}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            style={styles.activityIndicator}
            size={20}
            color="grey"
          />
        }
      />
      {/* <Text style={[appTheme.globalPadding, appTheme.title, { top: top + 20 }]}>
        Pokedex
      </Text> */}
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
  activityIndicator: {
    height: 100,
  },
  pokemonPicture: {
    width: 100,
    height: 100,
  },
});
