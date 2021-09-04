import React, { useContext, useEffect, useCallback, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/Products/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'Product'> {}

export const ProductScreen = ({ route, navigation }: Props) => {
  const { loadProductById, addProduct, updateProduct, uploadImage } =
    useContext(ProductsContext);
  const [tempUri, setTempUri] = useState<string>('');
  const { id = '', name = '' } = route.params;
  const { categories } = useCategories();
  const { _id, categoryId, productName, img, onChange, setFormValue } = useForm(
    {
      _id: id,
      categoryId: '',
      productName: name,
      img: '',
    },
  );

  const loadProduct = async () => {
    if (id) {
      const product = await loadProductById(id);
      setFormValue({
        _id: id,
        categoryId: product.categoria._id,
        img: product.img || '',
        productName,
      });
    }
  };

  const saveOrUpdate = useCallback(async () => {
    if (id) {
      await updateProduct(categoryId, id, productName);
    } else {
      await addProduct(categoryId || categories[0]._id, productName);
    }
    navigation.goBack();
  }, [
    addProduct,
    categories,
    categoryId,
    id,
    navigation,
    productName,
    updateProduct,
  ]);

  const takePhoto = useCallback(() => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      res => {
        if (!res.didCancel && res.assets?.length) {
          setTempUri(res.assets[0].uri || '');
          uploadImage(res, _id);
        }
      },
    );
  }, [_id, uploadImage]);

  const takePhotoFromGallery = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      res => {
        if (!res.didCancel && res.assets?.length) {
          setTempUri(res.assets[0].uri || '');
          uploadImage(res, _id);
        }
      },
    );
  }, [_id, uploadImage]);

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: productName ? productName : 'No product name',
    });
  }, [name, navigation, productName]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Product name:</Text>
        <TextInput
          placeholder="Product"
          style={styles.textInput}
          value={productName}
          onChangeText={value => onChange(value, 'productName')}
        />
        <Text style={styles.label}>Category:</Text>
        <Picker
          selectedValue={categoryId}
          onValueChange={itemValue => onChange(itemValue, 'categoryId')}
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
        <Button title="Save" onPress={saveOrUpdate} color="#5856D6" />
        {!!_id && (
          <View style={styles.row}>
            <Button title="Camera" onPress={takePhoto} color="#5856D6" />
            <View style={styles.horizontalSeparation} />
            <Button
              title="Gallery"
              onPress={takePhotoFromGallery}
              color="#5856D6"
            />
          </View>
        )}
        {!!img && !tempUri && (
          <Image source={{ uri: img }} style={styles.image} />
        )}
        {!!tempUri && <Image source={{ uri: tempUri }} style={styles.image} />}
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
  image: {
    width: '100%',
    height: 300,
    marginTop: 30,
  },
});
