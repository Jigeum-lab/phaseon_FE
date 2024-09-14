import React, { createContext, useMemo, useRef, useState } from 'react';
import { CategoryContextType } from '../interface';

export const CategoryContext = createContext<CategoryContextType>({
  currentCategory: '',
  setCurrentCategory: () => {},
  introRef: { current: null },
});

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState('information');
  const introRef = useRef<HTMLDivElement>(null);
  const value = useMemo(
    () => ({
      currentCategory,
      setCurrentCategory,
      introRef,
    }),
    [currentCategory],
  );

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}
