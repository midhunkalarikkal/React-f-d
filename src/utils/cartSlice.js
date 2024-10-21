import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        items : ["burger","pizza"]
    },
    reducers : {
        addItem : (state,action) => {
            // mutating the state
            state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            state.items.pop()
        },
        clearCart : (state,action) => {
            state.items.length = 0
        }
    }
})

export const {addItem , removeIem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;