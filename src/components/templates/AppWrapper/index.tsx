import React, { useEffect } from 'react'
import { userStore } from '../../../stores/userStore'
import Sidebar from '../../organisms/Sidebar'
import MF from '../../pages/MainFeed/MainFeed.module.scss'
type Props = {}

const AppWrapper: React.FC<Props> = ({ children }) => {
    const store = userStore(state => state)
    useEffect(() => {
        store.initalize()
    }, [])
    return (
        <>
            {store.initalized ? (
                <div className={MF.app}>
                    <Sidebar />
                    <div className={MF.feed}>{children}</div>
                </div>
            ) : (
                <div>LOADING</div>
            )}
        </>
    )
}

export default AppWrapper
