import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action) => {
            const existingOne = state.items.find((item) => item.card.info.id === action.payload.card.info.id)
            if(existingOne){
                existingOne.count = (existingOne.count || 1) + 1
            }else{
                state.items.push({...action.payload, count : 1})
            }
        },
        removeItem : (state) => {
            state.items.pop()
        },
        clearCart : (state,action) => {
            state.items.length = 0
        }
    }
})

export const {addItem , removeIem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;