import React, { useContext } from 'react';
import { productContext } from '../../../Context/productContext';
import ProductCard from '../../productCard/productCard';
import './shop.styles.scss';
function Shop() {
  const { product } = useContext(productContext);

  return (
    <>
      <div className="products-container" key={product.id}>
        {product.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      ;
    </>
  );
}

export default Shop;
