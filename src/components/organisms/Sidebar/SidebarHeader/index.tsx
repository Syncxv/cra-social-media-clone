import React, { useState } from 'react'
import { CaretDown } from 'phosphor-react'
import { CSSTransition } from 'react-transition-group'

import HeaderStyles from './HeaderStyles.module.scss'
import Dropdown from '../../../molecules/DropdownMenu'
import { UserType } from '../../../../types'
interface Props {
    user: UserType
}

const SidebarHeader: React.FC<Props> = ({ user }) => {
    return (
        <>
            <div className={HeaderStyles.sidebarHeader}>
                <div className={HeaderStyles.dropdown}>
                    <div className={HeaderStyles.logo}>
                        <span className={HeaderStyles.logoIcon}>b</span>
                    </div>
                    <div className={HeaderStyles.text}>
                        <h2 className={HeaderStyles.heading2}>Social Meida Idk Man</h2>
                        {user && <p className={HeaderStyles.smolText}>{`@${user.username}`}</p>}
                    </div>
                </div>
                {/* <CaretDown className={HeaderStyles.CaretDownThing} size={18} /> */}
            </div>
            {/* <CSSTransition in={open} unmountOnExit timeout={500} classNames="dropdownMenuTransition">
                <div>
                    <Dropdown user={user} />
                </div>
            </CSSTransition> */}
        </>
    )
}

export default SidebarHeader
