import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';
const WhitePokeballImage = require('../assets/white-pokeball.png');

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

export const PokemonScreen = ({ route, navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const {
    pokemon: { id, name, picture },
    color,
  } = route.params;
  const { isLoading, pokemon } = usePokemon(id);

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { backgroundColor: color }]}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.backButton, { top: top + 5 }]}
          onPress={() => navigation.pop()}
        >
          <Icon name="arrow-back-outline" color="#FFF" size={35} />
        </TouchableOpacity>
        <Text style={[styles.pokemonName, { top: top + 40 }]}>
          {`${name}\n`} #{id}
        </Text>
        <Image source={WhitePokeballImage} style={styles.pokeball} />
        <FadeInImage uri={picture} style={styles.pokemonPicture} />
      </View>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 400,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: '#FFF',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokemonPicture: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -40,
    opacity: 0.7,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
