import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import Button from '../button/Button';
import './product-card.styles.scss';
function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleClick = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleClick} buttonType="inverted">
        ADD TO CART
      </Button>
    </div>
  );
}

export default ProductCard;
