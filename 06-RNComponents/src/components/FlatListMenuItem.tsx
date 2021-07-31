import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({ item }: Props) => (
  <View style={styles.container}>
    <Icon name={item.icon} color="grey" size={25} />
    <Text style={styles.text}>{item.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
  },
});
