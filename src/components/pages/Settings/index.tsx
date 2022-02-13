import React from 'react'
import { Layer } from '../../organisms/Layer'
import SS from './Settings.module.scss'
import Bruh from './SettingSections'
type Props = {}
const ctx = (require as any).context
const Settings: React.FC<Props> = () => {
    console.log(Bruh, import.meta, ctx)
    return (
        <>
            <Layer>
                <div className={SS.settings}>
                    <aside className={SS.side}></aside>
                </div>
            </Layer>
        </>
    )
}

export default Settings
