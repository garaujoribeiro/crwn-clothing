import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import Button from '../button/Button';
import './cart-dropdown.styles.scss';

function CardDropdown() {
  const { toggle } = useContext(CartContext);

  return (
    <>
      {toggle && (
        <div className="cart-dropdown-container">
          <div className="cart-items" />
          <Button>CHECKOUT</Button>
        </div>
      )}
    </>
  );
}

export default CardDropdown;
