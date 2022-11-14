import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { productListReducer, productDetailReducer } from "./reducer/productReducer"
import { cartReducer } from "./reducer/CartReducer"


const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})
const cartItemFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const initialState = {
    cart: { cartItems: cartItemFromLocalStorage }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))


export default store