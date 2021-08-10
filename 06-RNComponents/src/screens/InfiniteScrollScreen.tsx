import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
  const { top } = useSafeAreaInsets();

  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const renderItem = ({ item }: { item: number }) => (
    <Text style={styles.textItem}>{item}</Text>
  );

  const loadMore = () => {
    const newNumbers: number[] = Array.from(
      { length: 5 },
      (v, i) => numbers.length + i,
    );
    setNumbers(currentNumbers => [...currentNumbers, ...newNumbers]);
  };

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <HeaderTitle text="Infinite Scroll" color="#5856D6" />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
