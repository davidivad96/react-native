import React, { useEffect } from 'react';
import { createContext, useState, useCallback } from 'react';
import cafeApi from '../../api/cafeApi';
import { Product, ProductsResponse } from '../../interfaces';

type ProductsContextProps = {
  products: Product[];
  loadProducts: () => void;
  addProduct: (categoryId: string, productName: string) => void;
  updateProduct: (
    categoryId: string,
    productId: string,
    productName: string,
  ) => void;
  deleteProduct: (productId: string) => void;
  loadProductById: (productId: string) => Product;
  uploadImage: (data: any, id: string) => void; // TODO: set data type, not any
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    const { data } = await cafeApi.get<ProductsResponse>('productos');
    setProducts(currentProducts => [...currentProducts, ...data.productos]);
  }, []);

  const addProduct = useCallback(
    async (categoryId: string, productName: string) => {},
    [],
  );

  const updateProduct = useCallback(
    async (categoryId: string, productId: string, productName: string) => {},
    [],
  );

  const deleteProduct = useCallback(async (productId: string) => {}, []);

  const loadProductById = useCallback(async (productId: string) => {}, []);

  const uploadImage = useCallback(async (data: any, id: string) => {}, []);

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
