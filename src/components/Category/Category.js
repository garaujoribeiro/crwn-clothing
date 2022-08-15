import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../Context/productContext';
import ProductCard from '../productCard/productCard';
import './category.styles.scss';
function Category() {
  const { category } = useParams();
  const { product } = useContext(productContext);
  const [productsArray, setProductsArray] = useState([]);

  console.log(useContext(productContext));

  useEffect(() => {
    setProductsArray(product[category]);
  }, [category, product]);
  return (
    <>
      <h2 style={{ textTransform: 'capitalize' }}>{category}</h2>
      <div className="category-component-container">
        {productsArray &&
          productsArray.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </>
  );
}

export default Category;
