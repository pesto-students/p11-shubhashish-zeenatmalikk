
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
} from '../Reducer/cart';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(()=>{
console.log('caart',cartItems)
  },[])
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleUpdateCartQuantity = (itemId, quantity) => {
    dispatch(updateCartItemQuantity({ id: itemId, quantity }));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems?.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleAddToCart(item)}>Add</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateCartQuantity(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
