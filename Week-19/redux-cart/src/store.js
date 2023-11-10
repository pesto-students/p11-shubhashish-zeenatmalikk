
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducer/cart';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
