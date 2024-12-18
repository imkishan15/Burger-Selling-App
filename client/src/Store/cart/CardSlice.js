import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state={}, action) => {

            // const alreadyExists=state.cartProducts.find(
            //     (item)=>item._id===action.payload._id
            // );
            
            // if(alreadyExists){
            //     return(
            //         ...state,
            //         products: state.cartProducts.map((product)=>
                    // product._id === action.payload._id ? action.payload :product)
            //     )
            // }
            // else{    
            // }
            
            return { products: [...state.products, {...action.payload, amount: 1}]}


        },
        clearCart: (state) => {
            return { products: []}
        },
        incrementProductAmount: (state, action) => {
            console.log('increment');
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
        }
    }
})

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer