import { createContext, useState, useEffect, useReducer } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';
export const productContext = createContext();

const ProductProvider = ({ children }) => {

  const INITIAL_PRODUCT = {};

  const productReducer = (prevState, action) =>{
    console.log(prevState, action)
    const {type, payload} = action;
    switch(type){
      case 'CREATE_PRODUCT':
        return {
          ...prevState, product: payload
        }
      default: 
        throw new Error('Unhandled type')
    }
  }

  const [{product}, productDispatch] = useReducer(productReducer, INITIAL_PRODUCT)

  const setProduct = (product) =>{
    console.log(product)
    productDispatch({type: 'CREATE_PRODUCT', payload: product})
  }

  const value = { product, setProduct };

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
