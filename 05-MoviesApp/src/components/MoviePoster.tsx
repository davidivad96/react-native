import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../interfaces/movieDBInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...styles.container, height, width }}
      onPress={() => navigation.navigate('Detail', movie)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.45,
    shadowRadius: 9.5,
    elevation: 15,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
});
