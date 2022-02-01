import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { userStore } from '../stores/userStore'
import { UserType } from '../types'

interface Props {}

const ME_QUERY = gql`
    query Query {
        me {
            _id
            username
            email
            avatar
        }
    }
`
const AuthMiddleware: React.FC<Props> = ({ children }) => {
    const { data, loading } = useQuery<{ me: UserType }>(ME_QUERY)
    const store = userStore(state => state)
    console.log(store)
    if (loading) return <div>Loading</div>
    if (store.user === null) {
        console.log(data)
        if (!data) return <Navigate to="/login" replace />
        store.setUser(data.me)
    }
    return <>{children}</>
}

export default AuthMiddleware
