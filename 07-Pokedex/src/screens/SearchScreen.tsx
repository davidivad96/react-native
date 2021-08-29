import React, { useEffect, useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { Pokemon } from '../interfaces/pokemonInterfaces';
import { appTheme } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, pokemons } = usePokemonSearch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setFilteredPokemons(
      searchTerm.length === 0
        ? []
        : pokemons.filter(poke =>
            poke.name.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
    );
  }, [pokemons, searchTerm]);

  const updateSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  return (
    <View style={[appTheme.container, styles.container]}>
      {isFetching ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size={50} color="grey" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <SearchInput
            style={{
              ...styles.searchInput,
              top: Platform.OS === 'ios' ? top : top + 10,
              width: screenWidth - 40,
            }}
            onDebounce={updateSearchTerm}
          />
          <FlatList
            data={filteredPokemons}
            keyExtractor={pokemon => pokemon.id}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            ListHeaderComponent={
              <Text
                style={[
                  appTheme.globalPadding,
                  appTheme.title,
                  { marginTop: top + 50 },
                ]}
              >
                {searchTerm}
              </Text>
            }
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    position: 'absolute',
    zIndex: 1000,
  },
});
