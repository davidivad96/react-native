import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { appTheme } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
const PokeballImage = require('../assets/pokeball.png');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemons, loadPokemons } = usePokemonPaginated();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={appTheme.container}>
      <Image source={PokeballImage} style={styles.pokeball} />
      <View style={styles.cardsContainer}>
        <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={
            <Text
              style={[
                appTheme.globalPadding,
                appTheme.title,
                { top: top + 20, marginBottom: top + 20 },
              ]}
            >
              Pokedex
            </Text>
          }
          ListFooterComponent={
            <ActivityIndicator
              style={styles.activityIndicator}
              size={20}
              color="grey"
            />
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
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
  cardsContainer: {
    alignItems: 'center',
  },
});
