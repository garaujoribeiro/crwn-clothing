import React, { useContext, Fragment } from 'react';
import { productContext } from '../../../Context/productContext';
import ProductCard from '../../productCard/productCard';
import './shop.styles.scss';
function Shop() {
  const { product } = useContext(productContext);

  return (
    <>
      {Object.keys(product).map((title) => (
        <Fragment key={product.id}>
          <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
          <div className="products-container">
            {product[title].map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </Fragment>
      ))}
      ;
    </>
  );
}

export default Shop;
