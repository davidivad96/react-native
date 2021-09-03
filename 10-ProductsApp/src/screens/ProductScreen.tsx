import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { useCategories } from '../hooks/useCategories';

interface Props extends StackScreenProps<ProductsStackParams, 'Product'> {}

export const ProductScreen = ({ route, navigation }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const { id, name = 'New product' } = route.params;
  const { categories } = useCategories();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, [name, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Product name:</Text>
        <TextInput placeholder="Product" style={styles.textInput} />
        <Text style={styles.label}>Category:</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={itemValue => setSelectedCategory(itemValue)}
        >
          {categories.map(category => (
            <Picker.Item
              label={category.nombre}
              value={category._id}
              key={category._id}
            />
          ))}
        </Picker>
        <View style={styles.verticalSeparation} />
        <Button title="Save" onPress={() => {}} color="#5856D6" />
        <View style={styles.row}>
          <Button title="Camera" onPress={() => {}} color="#5856D6" />
          <View style={styles.horizontalSeparation} />
          <Button title="Gallery" onPress={() => {}} color="#5856D6" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 23,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 46,
    marginTop: 5,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  horizontalSeparation: {
    width: 10,
  },
  verticalSeparation: {
    height: 10,
  },
});
