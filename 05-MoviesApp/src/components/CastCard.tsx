import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastCard = ({ actor }: Props) => {
  const uri = actor.profile_path
    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    : 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.actorInfo}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subtitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfo: {
    paddingHorizontal: 15,
  },
});
