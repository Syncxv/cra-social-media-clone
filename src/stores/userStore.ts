import create from 'zustand'
import { UserType } from '../types'

interface UserStoreHehe {
    user: UserType | null
    setUser: (user: UserType) => void
}

export const userStore = create<UserStoreHehe>(set => ({
    user: null,
    setUser: (user: UserType) => set(state => ({ ...state, user }))
}))
