import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
    authReducer,
    categoryReducer
})