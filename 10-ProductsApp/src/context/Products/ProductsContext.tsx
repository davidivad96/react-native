import React, { useEffect, createContext, useState, useCallback } from 'react';
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
  uploadImage: (data: any, id: string) => Promise<void>; // TODO: set data type, not any
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
    async (data: any, id: string): Promise<void> => {},
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
