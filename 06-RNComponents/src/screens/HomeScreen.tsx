import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { Separator } from '../components/Separator';
import { MENU_ITEMS } from '../data/MENU_ITEMS';
import { appTheme } from '../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <FlatList
        data={MENU_ITEMS}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
        ListHeaderComponent={() => <HeaderTitle text="Menu Options" />}
        ItemSeparatorComponent={() => <Separator />}
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
