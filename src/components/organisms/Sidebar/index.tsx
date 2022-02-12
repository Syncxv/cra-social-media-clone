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
import { userStore } from '../../../stores/userStore'
import Divider from '../../atoms/Divider'
import SideButton from '../../molecules/SideButton'
import ProfileFooter from './ProfileFooter'

import SidebarStyles from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'

interface Props {}

const Sidebar: React.FC<Props> = () => {
    const user = userStore(state => state.user)!
    return (
        <>
            <aside className={SidebarStyles.sidebar}>
                <div>
                    <SidebarHeader user={user} />
                    <div className={SidebarStyles.sidebarConents}>
                        <SideButton Icon={House} title="Home" letter="H" dropdown={false} />
                        <SideButton Icon={Notification} title="Notifacations" letter="N" dropdown={false} />
                        <Divider margin={1} />
                        <SideButton Icon={Chats} title="Messages" dropdown={true} />
                        <SideButton Icon={User} title="Profile" dropdown={false} />
                        <SideButton Icon={Gear} title="Settings" dropdown={false} />
                    </div>
                </div>
                <div>
                    <SideButton Icon={DotsThree} title="More" dropdown={false} />
                    <Divider margin={0.5} />
                    <ProfileFooter user={user} />
                </div>
            </aside>
        </>
    )
}

export default Sidebar