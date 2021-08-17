import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import { Pokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
const WhitePokeballImage = require('../assets/white-pokeball.png');

const { width: windowWidth } = Dimensions.get('window');

interface Props {
  pokemon: Pokemon;
}

const DEFAULT_COLOR = 'grey';

export const PokemonCard = ({ pokemon }: Props) => {
  const navigation = useNavigation();
  const [bgColor, setBgColor] = useState(DEFAULT_COLOR);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture)
      .then(colors => {
        setBgColor(
          colors.platform === 'ios'
            ? colors.background || DEFAULT_COLOR
            : colors.dominant || DEFAULT_COLOR,
        );
      })
      .catch(error => {
        console.log("Couldn't get colors of image: ", error);
      });
  }, [pokemon.picture]);

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() =>
        navigation.navigate('Pokemon', {
          pokemon,
          color: bgColor,
        })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}
      >
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
