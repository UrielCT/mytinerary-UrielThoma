import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children, statusToNotProtect }) => {
    const {status} = useSelector(store => store.authReducer)
    if(status === statusToNotProtect) {
        return children
    }

    return <Navigate to={statusToNotProtect === 'online' ? '/signin' : '/' }/>
}

export default ProtectedRouter