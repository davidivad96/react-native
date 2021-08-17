import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => (
  <ScrollView
    style={{
      ...StyleSheet.absoluteFillObject,
    }}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.container}>
      <Text style={styles.title}>Types</Text>
      <View style={styles.row}>
        {pokemon.types.map(({ type }) => (
          <Text key={type.name} style={styles.regularText}>
            {type.name}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>Weight</Text>
      <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      <Text style={styles.title}>Sprites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>
      <Text style={styles.title}>Abilities</Text>
      <View style={styles.row}>
        {pokemon.abilities.map(({ ability }) => (
          <Text key={ability.name} style={styles.regularText}>
            {ability.name}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>Moves</Text>
      <View style={styles.row}>
        {pokemon.moves.map(({ move }) => (
          <Text key={move.name} style={styles.regularText}>
            {move.name}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>Stats</Text>
      {pokemon.stats.map(stat => (
        <View key={stat.stat.name} style={styles.row}>
          <Text style={[styles.regularText, styles.stat]}>
            {stat.stat.name}
          </Text>
          <Text style={[styles.regularText, styles.baseStat]}>
            {stat.base_stat}
          </Text>
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 420,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  regularText: {
    fontSize: 19,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
  stat: {
    width: 150,
  },
  baseStat: {
    fontWeight: 'bold',
  },
});
