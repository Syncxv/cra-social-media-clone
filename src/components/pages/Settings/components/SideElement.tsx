import React from 'react'
import SS from '../Settings.module.scss'
type Props = {}

const SideElement: React.FC<Props> = ({ children }) => {
    return <div className={SS.element}>{children}</div>
}

export default SideElement
