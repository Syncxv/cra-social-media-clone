import { CaretDown } from 'phosphor-react'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { deafultPfp, UserType } from '../../../../types'
import Dropdown from './DropdownMenu'

import PF from './ProfileFooter.module.scss'

interface Props {
    user: UserType
}

const ProfileFooter: React.FC<Props> = ({ user }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div onClick={() => setOpen(!open)} className={PF.sidebarFooter}>
                <div className={PF.dropdown}>
                    <div className={PF.logo}>
                        <img className={PF.pfp} src={user.avatar || deafultPfp} />
                    </div>
                    <div className={PF.text}>
                        <h2 className={PF.heading2}>{user.displayName}</h2>
                        <p className={PF.smolText}>@{user.username}</p>
                    </div>
                </div>
                <CaretDown className={PF.CaretDownThing} size={18} />
            </div>
            <CSSTransition in={open} unmountOnExit timeout={500} classNames="dropdownMenuTransitionProfile">
                <div>
                    <Dropdown user={user} />
                </div>
            </CSSTransition>
        </>
    )
}

export default ProfileFooter
