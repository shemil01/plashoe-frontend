import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Components/feature/cartSlice";


export const store =configureStore({
    reducer:{
        appCart:cartSlice
    }
})