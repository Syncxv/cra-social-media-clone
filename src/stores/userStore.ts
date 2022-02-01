import create from 'zustand'
import { UserType } from '../types'

interface UserStoreHehe {
    user: UserType | null
}

export const userStore = create<UserStoreHehe>(set => ({
    user: null,
    setUser: (user: UserType) => set(state => ({ ...state, user }))
}))
