import React, { useState } from 'react'
import { Layer } from '../../organisms/Layer'
import { SidebarButton } from './components/SidebarButton'
import SS from './Settings.module.scss'
import SidebarItems from './SettingSections'
type Props = {}
const Settings: React.FC<Props> = () => {
    const [page, setPage] = useState(SidebarItems[0])
    return (
        <>
            <Layer>
                <div className={SS.settings}>
                    <aside className={SS.side}>
                        {SidebarItems.map((item, i) => (
                            <SidebarButton selected={page === item} key={i} onClick={() => setPage(item)}>
                                {item.label}
                            </SidebarButton>
                        ))}
                    </aside>
                    <main>
                        <page.element />
                    </main>
                </div>
            </Layer>
        </>
    )
}

export default Settings
