import { XCircle } from 'phosphor-react'
import React, { useState } from 'react'
import { layerStore } from '../../../stores/layerStore'
import { Layer } from '../../organisms/Layer'
import { SidebarButton } from './components/SidebarButton'
import SS from './Settings.module.scss'
import SidebarItems from './SettingSections'
type Props = {}
const Settings: React.FC<Props> = () => {
    const [page, setPage] = useState(SidebarItems[0])
    const layer = layerStore(state => state)
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
                    <main className={SS.main}>
                        <page.element />
                        <XCircle size={32} onClick={() => layer.pop()} />
                    </main>
                </div>
            </Layer>
        </>
    )
}

export default Settings
