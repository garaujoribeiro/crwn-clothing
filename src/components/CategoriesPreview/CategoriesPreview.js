import React, { useContext, Fragment } from 'react';
import { productContext } from '../../Context/productContext';
import CategoryPreview from '../categories-preview/CategoryPreview';
import './shop.styles.scss';
function CategoriesPreview() {
  const { product } = useContext(productContext);


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
