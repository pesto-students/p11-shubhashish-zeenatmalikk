
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:  [
      {
        id: 1,
        name: 'Product 1',
        quantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        quantity: 1,
      },
      {
        id: 3,
        name: 'Product 3',
        quantity: 3,
      },
    ],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
