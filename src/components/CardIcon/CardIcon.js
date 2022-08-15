import { useContext } from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../Context/cartContext';
import { CartIconContainer, ItemCount } from './card-icon.js';

function CardIcon() {
  const { setToggle, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setToggle((prev) => !prev)}>
      <ShoppingCart style={{ width: '24px', height: '24px' }} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CardIcon;
