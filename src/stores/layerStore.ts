import React from 'react'
import create from 'zustand'
import { UserType } from '../types'

interface ModalsArray {
    layer: React.FC
    props: any
    id: string
}

interface ModalStoreType {
    layers: ModalsArray[]
    push: (layer: React.FC, props?: any) => void
    pop: () => void
}

export const layerStore = create<ModalStoreType>(set => ({
    layers: [],
    push: (layer: React.FC, props) =>
        set(state => {
            const layersArray: ModalsArray = {
                layer: layer,
                id: (Date.now() + ~~Math.random()).toString(),
                props
            }
            return { ...state, layers: [...state.layers, layersArray] }
        }),
    pop: () =>
        set(state => {
            state.layers.shift()
            return {
                ...state,
                layers: state.layers
            }
        })
}))
