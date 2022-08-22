import React, { useContext, Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../categories-preview/CategoryPreview';
import './shop.styles.scss';
function CategoriesPreview() {

  const { product } = useSelector((state) => state.product)


  return (
    <>
      {Object.keys(product).map((title) => {
        const products = product[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
      ;
    </>
  );
}

export default CategoriesPreview;
