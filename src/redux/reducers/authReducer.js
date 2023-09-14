import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, signOut, signup } from "../actions/authActions.js";

const initialState = {
    user: {},
    token: null,
    status: 'offline'
}

const authReducer = createReducer(initialState,
    (builder) => builder
    .addCase(login, (state, action) => {
        const newState = { ...state, ...action.payload };
        return newState
    })
    .addCase(signup, (state, action) => {
        const newState = { ...state, ...action.payload }
        return newState
    })
    .addCase(authenticate.fulfilled, (state, action) => {
        const newState = { ...state, ...action.payload }
        return newState
    })
    .addCase(signOut, (state, action) => {
        const newState = initialState
        return newState
    })
    
)

export default authReducer