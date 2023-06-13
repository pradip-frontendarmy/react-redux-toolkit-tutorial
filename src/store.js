import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import confirmationModalReducer from "./features/confirmation-modal/confirmationModalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    confirmationModal: confirmationModalReducer,
  },
});
