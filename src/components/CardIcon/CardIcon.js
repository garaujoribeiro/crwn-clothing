import { useContext } from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../Context/cartContext';
import './cart-icon.styles.scss';

function CardIcon() {
  const { setToggle } = useContext(CartContext);
  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className="cart-icon-container"
    >
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CardIcon;
