import { createContext, useState, useEffect } from 'react';
// import SHOP_DATA from '../assets/shop-data.js';
// import { addColectionAndDocument } from '../utils/firebase/firebase.utils.js';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';
export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const value = { product, setProduct };

  // useEffect(() => {
  //   addColectionAndDocument('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollectionAndDocuments();
      console.log(data);
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
