import React from 'react'

import PDM from './ProfileDropdownMenu.module.scss'
import Divider from '../../../../atoms/Divider'
import { CaretRight, Heart, User } from 'phosphor-react'
import { deafultPfp, UserType } from '../../../../../types'

interface DropdownItemProps {
    leftIcon?: any
    rightIcon?: any
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, leftIcon, rightIcon }) => {
    return (
        <div className={PDM.dropdownItem}>
            <span className={PDM.leftIcon}>{leftIcon}</span>
            {children}
            <span className={PDM.rightIcon}>{rightIcon}</span>
        </div>
    )
}

interface DropdownProps {
    user: UserType
}

const Dropdown: React.FC<DropdownProps> = ({ children, user }) => {
    return (
        <>
            <div className={PDM.dropdown}>
                <div className={PDM.sidebarHeader}>
                    <div className={PDM.contentWrapper}>
                        <div className={PDM.logo}>
                            <img src={deafultPfp} />
                        </div>
                        <div className={PDM.text}>
                            <h2 className={PDM.heading2}>{user.username}</h2>
                            <p className={PDM.smolText}>@{user.username}</p>
                        </div>
                    </div>
                </div>
                <DropdownItem>My profile</DropdownItem>
                <DropdownItem rightIcon={<CaretRight />}>Pause notifacations</DropdownItem>
                <DropdownItem>Manage Notifacations</DropdownItem>
                <Divider marginTop={0.7} />
                <DropdownItem leftIcon={<Heart />}>Explore templates</DropdownItem>
                <DropdownItem leftIcon={<User />}>Become an Expert</DropdownItem>

                <Divider marginTop={0.7} />
                <DropdownItem>Log out</DropdownItem>
                <Divider marginBottom={0.2} opacity={0.7} hidden={true} />
            </div>
            <div className="backdrop"></div>
        </>
    )
}

export default Dropdown
