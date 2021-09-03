import { useCallback, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { CategoriesResponse, Category } from '../interfaces';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCategories = useCallback(async () => {
    setIsLoading(true);
    const { data } = await cafeApi.get<CategoriesResponse>('/categorias');
    setCategories(data.categorias);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return {
    categories,
    isLoading,
  };
};
