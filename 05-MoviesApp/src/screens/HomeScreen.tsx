import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieDBInterfaces';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB
      .get<MovieDBNowPlaying>('/now_playing')
      .then(res => console.log('res: ', res.data.results[0].title))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
