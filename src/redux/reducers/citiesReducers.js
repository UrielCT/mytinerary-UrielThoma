import { createReducer } from "@reduxjs/toolkit";
import { getCitiesSync, getCitiesAsync, getCitiesSearchedSync, getCitiesAsyncById } from "../actions/citiesActions";

const initialState = {
    city:{},
    cities: [],
    loading: false,
    citiesSearched: []
}


const citiesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCitiesSync, (state, action) => {
            const newState = { ...state, cities: action.payload}
            return newState
        })

        // FILTER
        .addCase(getCitiesSearchedSync, (state, action) =>{
            const filteredCities = action.payload.cities.filter(city =>
                city.name.toLowerCase().startsWith(action.payload.inputText.toLowerCase())
            );
            
            const newState = { ...state, citiesSearched: filteredCities}
            return newState
        })

        .addCase(getCitiesAsync.fulfilled, (state, action) => {
            console.log('fulfilled');
            //console.log(action.payload);
            const newState = { ...state, cities: action.payload, loading: false, citiesSearched: action.payload}
            return newState
        })

        .addCase(getCitiesAsync.pending, (state, action) => {
            console.log('pending');
            const newState = { ...state, loading: true}
            return newState
        })

        .addCase(getCitiesAsync.rejected, (state, action) => {
            console.log('rejected');
            const newState = { ...state, loading: false}
            return newState
        })

        // BY ID
        .addCase(getCitiesAsyncById.fulfilled, (state, action) => {
            console.log('fulfilled');
            //console.log(action.payload);
            const newState = { ...state,city:action.payload, cities: action.payload, loading: false, citiesSearched: action.payload}
            return newState
        })

        .addCase(getCitiesAsyncById.pending, (state, action) => {
            console.log('pending');
            const newState = { ...state, loading: true}
            return newState
        })

        .addCase(getCitiesAsyncById.rejected, (state, action) => {
            console.log('rejected');
            const newState = { ...state, loading: false}
            return newState
        })
)

export default citiesReducer