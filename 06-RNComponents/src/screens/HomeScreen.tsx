import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

interface MenuItem {
  id: number;
  name: string;
  icon: string;
  components: string;
}

const DATA: MenuItem[] = [
  {
    id: 0,
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderItem = (item: MenuItem) => (
    <Text>
      {item.name} - {item.icon}
    </Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
