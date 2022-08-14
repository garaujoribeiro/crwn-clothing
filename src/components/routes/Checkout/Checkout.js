import { useContext } from 'react';
import { CartContext } from '../../../Context/cartContext';
import CheckoutItem from './checkout-item/CheckoutItem';
import './checkout.styles.scss';
function Checkout() {
  const { cartItem, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <span className="total">{`Total $${cartTotal}`}</span>
    </div>
  );
}

export default Checkout;
