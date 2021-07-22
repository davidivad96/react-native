import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ paddingTop: top + 20 }}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
            inactiveSlideOpacity={0.5}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: 440,
  },
});
