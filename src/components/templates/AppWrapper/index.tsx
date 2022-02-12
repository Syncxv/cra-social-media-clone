import React from 'react'
import Sidebar from '../../organisms/Sidebar'
import MF from '../../pages/MainFeed/MainFeed.module.scss'
type Props = {}

const AppWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className={MF.app}>
            <Sidebar />
            <div className={MF.feed}>{children}</div>
        </div>
    )
}

export default AppWrapper
