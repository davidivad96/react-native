import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterfaces';
import { CastCard } from './CastCard';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name="star-outline" color="blue" size={16} style={styles.icon} />
        <Text>{movieFull.vote_average}</Text>
        <Text> - {movieFull.genres.map(genre => genre.name).join(', ')}</Text>
      </View>
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.body}>{movieFull.overview}</Text>
      <Text style={styles.title}>Budget</Text>
      <Text style={styles.body}>
        {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
      </Text>
      <View style={styles.castContainer}>
        <Text style={styles.title}>Cast</Text>
        <FlatList
          horizontal
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastCard actor={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  castContainer: {
    marginTop: 10,
  },
});
