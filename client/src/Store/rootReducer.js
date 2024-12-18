import { combineReducers } from "redux";
import cartReducer from "./cart/CardSlice";
import productReducer from './menu/ProductSlice'

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer
    }
);

export default rootReducer;