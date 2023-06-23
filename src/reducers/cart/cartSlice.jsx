import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: '',
    count: 0,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = [...state.product, action.payload.product]
            state.count = state.product.length
        },
        unsetProduct: (state, action) => {
            const productToDelete = action.payload.product
            state.product = state.product.filter(titles => titles.title !== productToDelete)
            state.count = state.product.length           
        },
        clearCart: (state) => {
            state.product = '',
            state.count = 0
        }
    }
})

export const { setProduct, unsetProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer
