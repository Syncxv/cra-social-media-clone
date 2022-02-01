import React from 'react'
import { Navigate } from 'react-router-dom'
import { userStore } from '../stores/userStore'

interface Props {}

const AuthMiddleware: React.FC<Props> = ({ children }) => {
    const hehe = userStore(state => state.user)
    console.log(hehe)
    if (hehe === null) return <Navigate to="/login" replace />
    return <>{children}</>
}

export default AuthMiddleware
