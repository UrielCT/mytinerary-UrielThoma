import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios.js";
import { LS } from "../../utils/LS.js";
import { toast } from "react-toastify";

const login = createAction('login', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status:'online'
    }

    LS.set('token', credentials.token)

    toast.success('Welcome again '+ reducerData.user.name + '!',{
        position: 'top-right',
        autoClose: 5000,
    })

    return{
        payload: reducerData
    }    
});


const signup = createAction('signup', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status:"online"
    }
    toast.success('Welcome '+ reducerData.user.name + '!',{
        position: 'top-right',
        autoClose: 3000,
    })
    return{
        payload: reducerData
    }    
}); 


const authenticate = createAsyncThunk('authenticate', async () => {

    try {
        const token = LS.getText('token')
        console.log(token);
    
        const {data} = await server.get('/auth/token', {
            headers:{
                Authorization: "Bearer " + token
            }
        })
        const reducerData = {
            user: data.userData,
            status:"online"
        }
        console.log(reducerData);

        toast.success('Welcome again '+ reducerData.user.name + '!',{
            position: 'top-right',
            autoClose: 3000,
        })
        
        return reducerData

    } catch (error) {
        console.log(error);
    }
    
    
});

const signOut = createAction('signOut',() => {
    LS.rm('token')

    return {
        payload: null
    }
}) 

export { login, signup, authenticate, signOut}


