import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action) => {
            console.log("action.payload : ",action.payload);
            const existingOne = state.items.find((item) => item.id === action.payload.id)
            if(existingOne){
                existingOne.count = (existingOne.count || 1) + 1
            }else{
                console.log("second console.log action.payload",action.payload);
                state.items.push({...action.payload, count : 1})
            }
        },
        removeItem : (state) => {
            console.log("removing item");
            state.items.pop()
        },
        clearCart : (state,action) => {
            console.log("clearing cart");
            state.items.length = 0
        }
    }
})

export const {addItem , removeIem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;