import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { Spacer } from './Spacer';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({ item }: Props) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.2}>
    <Icon name={item.icon} color="grey" size={25} />
    <Text style={styles.text}>{item.name}</Text>
    <Spacer />
    <Icon name="chevron-forward-outline" color="grey" size={25} />
  </TouchableOpacity>
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
