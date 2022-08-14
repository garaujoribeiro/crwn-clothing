import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

function CardDropdown() {
  const { toggle, cartItem, setToggle } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
    setToggle(false);
  };

  return (
    <>
      {toggle && (
        <div className="cart-dropdown-container">
          <div className="cart-items">
            {cartItem.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </div>
          <Button onClick={goToCheckout}>CHECKOUT</Button>
        </div>
      )}
    </>
  );
}

export default CardDropdown;
