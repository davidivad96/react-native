import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appTheme } from '../theme/appTheme';

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
  {
    id: 1,
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderItem = (item: MenuItem) => (
    <Text>
      {item.name} - {item.icon}
    </Text>
  );

  const renderListHeader = () => (
    <Text style={appTheme.title}>Menu Options</Text>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 2,
    opacity: 0.4,
    marginVertical: 3,
  },
});
