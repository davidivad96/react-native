import React, { useEffect, createContext, useState, useCallback } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { AxiosError } from 'axios';
import cafeApi from '../../api/cafeApi';
import { Product, ProductsResponse } from '../../interfaces';

type ProductsContextProps = {
  products: Product[];
  loadProducts: () => Promise<void>;
  addProduct: (
    categoryId: string,
    productName: string,
  ) => Promise<Product | void>;
  updateProduct: (
    categoryId: string,
    productId: string,
    productName: string,
  ) => Promise<Product | void>;
  deleteProduct: (productId: string) => Promise<void>;
  loadProductById: (productId: string) => Promise<Product>;
  uploadImage: (
    imageData: ImagePickerResponse,
    productId: string,
  ) => Promise<void>;
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async (): Promise<void> => {
    const { data } = await cafeApi.get<ProductsResponse>('productos');
    setProducts(data.productos);
  }, []);

  const addProduct = useCallback(
    async (
      categoryId: string,
      productName: string,
    ): Promise<Product | void> => {
      try {
        const { data } = await cafeApi.post<Product>('/productos', {
          categoria: categoryId,
          nombre: productName,
        });
        setProducts(currentProducts => [...currentProducts, data]);
        return data;
      } catch (err) {
        const error = err as AxiosError;
        console.log('error: ', error.response?.data);
      }
    },
    [],
  );

  const updateProduct = useCallback(
    async (
      categoryId: string,
      productId: string,
      productName: string,
    ): Promise<Product | void> => {
      try {
        const { data } = await cafeApi.put<Product>(`/productos/${productId}`, {
          categoria: categoryId,
          nombre: productName,
        });
        setProducts(currentProducts =>
          currentProducts.map(product =>
            product._id === productId ? data : product,
          ),
        );
        return data;
      } catch (err) {
        const error = err as AxiosError;
        console.log('error: ', error.response?.data);
      }
    },
    [],
  );

  const deleteProduct = useCallback(
    async (productId: string): Promise<void> => {},
    [],
  );

  const loadProductById = useCallback(
    async (productId: string): Promise<Product> => {
      const { data } = await cafeApi.get<Product>(`/productos/${productId}`);
      return data;
    },
    [],
  );

  const uploadImage = useCallback(
    async (
      imageData: ImagePickerResponse,
      productId: string,
    ): Promise<void> => {
      if (imageData.assets?.length) {
        const image = imageData.assets[0];
        const fileToUpload = {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        };
        const formData = new FormData();
        formData.append('archivo', fileToUpload);
        try {
          await cafeApi.put(`/uploads/productos/${productId}`, formData);
        } catch (err) {
          const error = err as AxiosError;
          console.log('error: ', error.response?.data);
        }
      }
    },
    [],
  );

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProductById,
        uploadImage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
