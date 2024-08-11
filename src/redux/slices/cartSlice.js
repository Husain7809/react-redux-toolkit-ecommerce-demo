import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const getItemSelector = createSelector(
    (state) => state.cart,
    (state) => state,
)

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer