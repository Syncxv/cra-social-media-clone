import React from 'react'

import DM from './DropdownMenu.module.scss'
import { Car } from 'phosphor-react'
import Divider from '../../atoms/Divider'
import SidebarHeader from '../../organisms/Sidebar/SidebarHeader'

interface DropdownItemProps {
    leftIcon?: any
    rightIcon?: any
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, leftIcon, rightIcon }) => {
    return (
        <div className={DM.dropdownItem}>
            <span className={DM.leftIcon}>{leftIcon}</span>
            {children}
            <span className={DM.rightIcon}>{rightIcon}</span>
        </div>
    )
}

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    return (
        <div className={DM.dropdown}>
            <div className={DM.sidebarHeader}>
                <div className={DM.contentWrapper}>
                    <div className={DM.logo}>
                        <span className={DM.logoIcon}>b</span>
                    </div>
                    <div className={DM.text}>
                        <h2 className={DM.heading2}>Creatovis</h2>
                        <p className={DM.smolText}>A LOT OF TEXT IDK MAN</p>
                    </div>
                </div>
            </div>
            <Divider opacity={0.7} margin={0.7} />
            <div className={DM.info}>
                <p className={DM.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illum.
                </p>
                <a className={DM.upgrade} href="#">
                    Upgrade
                </a>
            </div>
            <Divider opacity={0.7} margin={0.7} />
            <DropdownItem>Invite People</DropdownItem>
            <DropdownItem>Preferences</DropdownItem>
            <DropdownItem>Tools</DropdownItem>
            <Divider marginTop={0.7} />
            <DropdownItem>Log out</DropdownItem>
            <Divider marginBottom={0.2} opacity={0.7} hidden={true} />
        </div>
    )
}

export default Dropdown
