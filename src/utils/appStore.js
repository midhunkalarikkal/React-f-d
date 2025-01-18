import { toast } from 'react-toastify';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import { configureStore } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cartState", serializedState);
    }catch(error){
        toast.error("item adding error");
    }
}

const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem("cartState");
        return serializedState ? JSON.parse(serializedState) : undefined;
    }catch(error){
        return undefined;
    }
}

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        user : userReducer
    },
    preloadedState : loadFromLocalStorage(),
})

appStore.subscribe(() => {
    saveToLocalStorage(appStore.getState());
})

export default appStore;