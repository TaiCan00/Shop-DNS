import { configureStore } from "@reduxjs/toolkit";
import { cartItemSlice } from "./cartItemsSlice";

export const store = configureStore({
    reducer: {
        cartItems: cartItemSlice.reducer
    }
})


