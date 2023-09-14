import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <GoogleOAuthProvider clientId='848676086416-7mtccpq93rq0ihp907n82h2kbepbi26l.apps.googleusercontent.com'>
            <App/> 
            <ToastContainer
                position='top-right'
                hideProgressBar = {false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </GoogleOAuthProvider>
    </Provider>
)
