import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Pokemon } from '../interfaces/pokemonInterfaces';

const { width: windowWidth } = Dimensions.get('window');

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
        <Text
          style={styles.pokemonName}
        >{`${pokemon.name}\n#${pokemon.id}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginBottom: 25,
    height: 120,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  pokemonName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
});
