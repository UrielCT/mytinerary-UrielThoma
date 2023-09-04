import { createReducer } from "@reduxjs/toolkit";
import { getItinerariesSync, getItinerariesAsync } from "../actions/itinerariesActions";

const initialState = {
    itineraries: [],
    loading: false
}


const itinerariesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getItinerariesSync, (state, action) => {
            const newState = { ...state, itineraries: action.payload}
            return newState
        })

        .addCase(getItinerariesAsync.fulfilled, (state, action) => {
            console.log('fulfilled');
            //console.log(action.payload);
            const newState = { ...state, itineraries: action.payload, loading: false}
            return newState
        })

        .addCase(getItinerariesAsync.pending, (state, action) => {
            console.log('pending');
            const newState = { ...state, loading: true}
            return newState
        })

        .addCase(getItinerariesAsync.rejected, (state, action) => {
            console.log('rejected');
            const newState = { ...state, loading: false}
            return newState
        })
)

export default itinerariesReducer