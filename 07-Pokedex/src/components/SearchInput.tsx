import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ style = {} }: Props) => (
  <View style={style}>
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Search pokemon"
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Icon name="search-outline" color="grey" size={30} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
