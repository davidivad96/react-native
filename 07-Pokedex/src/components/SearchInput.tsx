import React, { useEffect, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounce } from '../hooks/useDebounce';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ style = {} }: Props) => {
  const [textValue, setTextValue] = useState<string>('');
  const debouncedValue = useDebounce(textValue, 1500);

  useEffect(() => {
    console.log('debounced value: ', debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={style}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Search pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

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
