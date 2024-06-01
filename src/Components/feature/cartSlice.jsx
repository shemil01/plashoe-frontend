// import { createSlice } from "@reduxjs/toolkit";


// const initialState={
//     cart:[]
// }

// const dataSlice = createSlice({
//     name:"Cart",
//     initialState,
//     reducers:{
//       addCart:(state,action)=>{
//        const itemIndex = state.cart.findIndex(
//         (item)=>item.id === action.payload.id
//        )
//        if(itemIndex !== -1){
//         state.cart[itemIndex].quantity++
//        }else{
//         state.cart.push({...action.payload,quantity:1})
//        }
//       },
//       removeCart: (state, action) => {
//         const itemId = action.payload;
//         state.cart = state.cart.filter(item => item.id !== itemId);
//       }
      
      
      
//     }
    
// })
// export const {addCart,removeCart}=dataSlice.actions
// export default dataSlice.reducer