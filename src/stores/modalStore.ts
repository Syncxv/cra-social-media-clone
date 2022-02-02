import React from 'react'
import create from 'zustand'
import { UserType } from '../types'

interface ModalsArray {
    modal: React.FC
    props: any
    id: string
}

interface ModalStoreType {
    modals: ModalsArray[]
    push: (modal: React.FC, props?: any) => void
    pop: () => void
}

export const modalStore = create<ModalStoreType>(set => ({
    modals: [],
    push: (modal: React.FC, props) =>
        set(state => {
            const modalsArray: ModalsArray = {
                modal: modal,
                id: (Date.now() + ~~Math.random()).toString(),
                props
            }
            return { ...state, modals: [...state.modals, modalsArray] }
        }),
    pop: () =>
        set(state => {
            state.modals.shift()
            return {
                ...state,
                modals: state.modals
            }
        })
}))
