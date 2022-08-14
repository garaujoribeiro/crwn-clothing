import { useContext } from 'react';
import { CartContext } from '../../../../Context/cartContext';
import './checkout-item.styles.scss';
function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const { forceRemoveItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearHandler = () => forceRemoveItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
