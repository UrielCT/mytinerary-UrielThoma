import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const getCitiesSync = createAction('getCitiesSync', (data) => {
    return{
        payload: 'algo'
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

export {getCitiesSync, getCitiesAsync}