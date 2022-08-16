import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../Context/productContext';
import ProductCard from '../productCard/productCard';
import { CategoryComponentContainer, CategoryTitle } from './CategoryStyled';

function Category() {
  const { category } = useParams();
  const { product } = useContext(productContext);
  const [productsArray, setProductsArray] = useState([]);


  useEffect(() => {
    setProductsArray(product[category]);
  }, [category, product]);
  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryComponentContainer>
        {productsArray &&
          productsArray.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </CategoryComponentContainer>
    </>
  );
}

export default Category;
