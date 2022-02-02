import React from 'react'
import { deafultPfp, UserType } from '../../../types'
import UP from './UserPill.module.scss'

interface Props {
    user: UserType
}

const UserPill: React.FC<Props> = ({ user }) => {
    return (
        <div className={UP.user}>
            <img className={UP.avatar} src={user.avatar || deafultPfp} alt="" />
            <div className={UP.name}>@{user.username}</div>
        </div>
    )
}

export default UserPill
