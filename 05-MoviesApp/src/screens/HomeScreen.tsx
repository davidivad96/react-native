import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { movies, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{ paddingTop: top + 20 }}>
      <MoviePoster movie={movies[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
