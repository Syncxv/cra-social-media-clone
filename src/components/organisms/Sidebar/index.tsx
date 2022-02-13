import {
    Cards,
    Chats,
    CircleNotch,
    DotsThree,
    Folder,
    Gear,
    Graph,
    House,
    ListDashes,
    Notification,
    User
} from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { layerStore } from '../../../stores/layerStore'
import { userStore } from '../../../stores/userStore'
import Divider from '../../atoms/Divider'
import SideButton from '../../molecules/SideButton'
import Settings from '../../pages/Settings'
import ProfileFooter from './ProfileFooter'

import SidebarStyles from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'

interface Props {}

const Sidebar: React.FC<Props> = () => {
    const navigator = useNavigate()
    const user = userStore(state => state.user)!
    const store = layerStore(state => state)
    return (
        <>
            <aside className={SidebarStyles.sidebar}>
                <div>
                    <SidebarHeader user={user} />
                    <div className={SidebarStyles.sidebarConents}>
                        <SideButton
                            Icon={House}
                            title="Home"
                            letter="H"
                            dropdown={false}
                            onClick={() => navigator('/')}
                        />
                        <SideButton Icon={Notification} title="Notifacations" letter="N" dropdown={false} />
                        <Divider margin={1} />
                        <SideButton Icon={Chats} title="Messages" dropdown={true} />
                        <SideButton Icon={User} title="Profile" dropdown={false} />
                        <SideButton
                            Icon={Gear}
                            title="Settings"
                            dropdown={false}
                            onClick={() => {
                                store.push(Settings)
                            }}
                        />
                    </div>
                </div>
                <div>
                    <SideButton Icon={DotsThree} title="More" dropdown={false} />
                    <Divider margin={0.5} />
                    {user && <ProfileFooter user={user} />}
                </div>
            </aside>
        </>
    )
}

export default Sidebar
