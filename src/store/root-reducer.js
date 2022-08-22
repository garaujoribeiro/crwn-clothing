import { combineReducers } from "redux";
import { productReducer } from "./products/product-reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,

})