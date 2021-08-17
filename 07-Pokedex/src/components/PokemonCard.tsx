import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Pokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
const WhitePokeballImage = require('../assets/white-pokeball.png');

const { width: windowWidth } = Dimensions.get('window');

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <View style={{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
        <Text style={styles.pokemonName}>
          {`${pokemon.name}\n#${pokemon.id}`}
        </Text>
        <View style={styles.pokeballContainer}>
          <Image source={WhitePokeballImage} style={styles.pokeball} />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonPicture} />
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  pokemonName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.6,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
  pokemonPicture: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
