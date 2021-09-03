import React, { useContext, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsContext } from '../context/Products/ProductsContext';
import { ProductsStackParams } from '../navigation/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsList'> {}

export const ProductsListScreen = ({ navigation }: Props) => {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => navigation.navigate('Product', {})}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        padding: 15,
      },
    });
  }, [navigation]);

  // TODO: Pull to refresh

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() =>
              navigation.navigate('Product', {
                id: item._id,
                name: item.nombre,
              })
            }
          >
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5,
  },
});
