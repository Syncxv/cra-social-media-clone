import React from 'react'
import LS from './Layer.module.scss'
type Props = {}

export const Layer: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className={LS.layerBackground}>{children}</div>
        </>
    )
}
