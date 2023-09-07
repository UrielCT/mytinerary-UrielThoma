import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const getCitiesSync = createAction('getCitiesSync', (data) => {
    return{
        payload: 'algo'
    }
})



const getCitiesAsyncById = createAsyncThunk('getCitiesAsyncById', async ({id}) => {

    try {
        const res = await server.get('/cities/'  + id )
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }

    
})


const getCitiesAsync = createAsyncThunk('getCitiesAsync', async () => {

    try {
        const res = await server.get('/cities')
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }

    /* server.get('/cities/')
      .then(res => {
        setCities(res.data.response)
        setCitiesSearched(res.data.response)
      })
      .catch(e => console.log(e)); */

    /* return{
        payload: 'algo'
    } */
})


const getCitiesSearchedSync = createAction('getCitiesSearchedSync', (inputText, cities) => {
    return{
        payload: {
            inputText: inputText,
            cities: cities
        }
    }
})


export {getCitiesSync, getCitiesAsync, getCitiesSearchedSync, getCitiesAsyncById}