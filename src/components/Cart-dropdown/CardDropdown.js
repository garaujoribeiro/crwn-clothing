import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartDropdownContainer, CartItems } from './cart-dropdown.js';

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
        <CartDropdownContainer>
          <CartItems>
            {cartItem.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </CartItems>
          <Button style={{ marginTop: 'auto' }} onClick={goToCheckout}>
            CHECKOUT
          </Button>
        </CartDropdownContainer>
      )}
    </>
  );
}

export default CardDropdown;
