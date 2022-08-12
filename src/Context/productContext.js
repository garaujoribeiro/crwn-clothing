import { createContext, useState } from 'react';
import DEFAULT_PRODUCTS from '../assets/shop-data.json';

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(DEFAULT_PRODUCTS);
  const value = { product, setProduct };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
