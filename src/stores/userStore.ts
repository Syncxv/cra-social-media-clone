import { gql, useApolloClient } from '@apollo/client'
import create from 'zustand'
import { client } from '..'
import { UserType } from '../types'

interface UserStoreHehe {
    user: UserType | null
    initalized: boolean
    setUser: (user: UserType) => void
    initalize: () => void
}
export const ME_QUERY = gql`
    query Me {
        me {
            _id
            email
            username
            displayName
            avatar
            followers {
                _id
                username
            }
            isStaff
        }
    }
`
export const userStore = create<UserStoreHehe>(set => ({
    initalized: false,
    user: null,
    setUser: (user: UserType) => set(state => ({ ...state, user })),
    initalize: async () => {
        const {
            data: { me }
        } = await client.query<{ me: UserType }>({ query: ME_QUERY })
        set(state => ({ ...state, initalized: true, user: me }))
    }
}))
