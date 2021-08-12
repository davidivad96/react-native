import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/theme/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';
import { Spacer } from './Spacer';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({ item }: Props) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.2}
      onPress={() => navigation.navigate(item.component)}
    >
      <Icon name={item.icon} color={theme.colors.primary} size={25} />
      <Text style={{ ...styles.text, color: theme.colors.text }}>
        {item.name}
      </Text>
      <Spacer />
      <Icon
        name="chevron-forward-outline"
        color={theme.colors.primary}
        size={25}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
  },
});
