import React from 'react';
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
import { appTheme } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, pokemons } = usePokemonSearch();

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
          />
          <FlatList
            data={pokemons}
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
                Pokedex
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
