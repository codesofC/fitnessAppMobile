import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducer from "./reducers";

const rootReducer = combineReducers({
    favorite: reducer
});

const store = configureStore({
    reducer: rootReducer
})

export default store