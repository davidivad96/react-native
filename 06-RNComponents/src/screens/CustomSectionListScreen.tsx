import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

interface Houses {
  id: number;
  house: string;
  data: string[];
}

const houses: Houses[] = [
  {
    id: 1,
    house: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    id: 2,
    house: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    id: 3,
    house: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const CustomSectionListScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Section List" color="#5856D6" />
      <SectionList
        sections={houses}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item.concat(index.toString())}
        renderSectionHeader={({ section }) => (
          <HeaderTitle text={section.house} />
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
