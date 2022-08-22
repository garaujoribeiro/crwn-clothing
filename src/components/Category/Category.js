import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard/productCard';
import { CategoryComponentContainer, CategoryTitle } from './CategoryStyled';

function Category() {
  const { category } = useParams();
  const { product } = useSelector((state) => state.product);

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
