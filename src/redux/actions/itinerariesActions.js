import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const getItinerariesSync = createAction('getItinerariesSync', (data) => {
    return{
        payload: 'algo'
    }
})

const getItinerariesAsync = createAsyncThunk('getItinerariesAsync', async ({id}) => {

    try {
        const res = await server.get('/itineraries/' + id )
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }

    /* return{
        payload: 'algo'
    } */
})

export {getItinerariesSync, getItinerariesAsync}