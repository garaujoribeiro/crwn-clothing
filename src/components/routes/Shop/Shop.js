import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setProduct } from '../../../store/products/product-action';
import { getCollectionAndDocuments } from '../../../utils/firebase/firebase.utils';
import CategoriesPreview from '../../CategoriesPreview/CategoriesPreview';
import Category from '../../Category/Category';

function Shop() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollectionAndDocuments();
      dispatch(setProduct(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={'/:category'} element={<Category />} />
    </Routes>
  );
}

export default Shop;
