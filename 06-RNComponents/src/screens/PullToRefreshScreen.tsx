import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Finished');
      setRefreshing(false);
      setData('Hello World!');
    }, 3500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          style={styles.refreshControl}
          tintColor="#FFF"
        />
      }
    >
      <View
        style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
      >
        <HeaderTitle text="Pull to refresh" color="#5856D6" />
        {!!data && <HeaderTitle text={data} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  refreshControl: {
    backgroundColor: '#5856D6',
  },
});
