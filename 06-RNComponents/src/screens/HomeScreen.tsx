import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListHeader } from '../components/FlatListHeader';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { FlatListSeparator } from '../components/FlatListSeparator';
import { MenuItem } from '../interfaces/appInterfaces';
import { appTheme } from '../theme/appTheme';

const DATA: MenuItem[] = [
  {
    id: 0,
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    id: 1,
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
];

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
        ListHeaderComponent={() => <FlatListHeader text="Menu Options" />}
        ItemSeparatorComponent={() => <FlatListSeparator />}
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
