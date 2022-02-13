import React from 'react'

import bruh from './SidebarButton.module.scss'

interface Props {
    onClick: () => any
    selected: boolean
}

export const SidebarButton: React.FC<Props> = ({ children, selected, onClick }) => {
    return (
        <div onClick={onClick} className={`${bruh.sidebarBtn} ${selected ? bruh.select : ''}`}>
            <span className={bruh.label}>{children}</span>
        </div>
    )
}
