import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
const WhitePokeballImage = require('../assets/white-pokeball.png');

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

export const PokemonScreen = ({ route, navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const {
    pokemon: { id, name, picture },
    color,
  } = route.params;

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});
