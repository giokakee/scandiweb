import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import currencyReducer from "./reducers/currencyReducer";
import productsReducer from "./reducers/productsReducer";



const reducers = combineReducers({
    productsReducer,
    cartReducer,
    currencyReducer
})



const store = configureStore({
    reducer: reducers
},
composeWithDevTools(
    applyMiddleware(thunk)
    )
)


export default store