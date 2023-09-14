import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
    reducer:{
        citiesReducer,
        itinerariesReducer,
        authReducer
    }
})