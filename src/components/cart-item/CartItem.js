import React from 'react';
import {
  CartItemContainer,
  CartImg,
  CartSpan,
  ItemDetails,
} from './cart-item.js';
function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartImg src={imageUrl} alt={name} />
      <ItemDetails>
        <CartSpan>{name}</CartSpan>
        <CartSpan>{`${quantity} x ${'$'}${price}`}</CartSpan>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
