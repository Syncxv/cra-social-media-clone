import React from 'react'
import UP from './UserPill.module.scss'

interface Props {
    username: string
}

const UserPill: React.FC<Props> = ({ username }) => {
    return (
        <div className={UP.user}>
            <img className={UP.avatar} src="https://i.imgur.com/JUVFPMN.png" alt="" />
            <div className={UP.name}>@{username}</div>
        </div>
    )
}

export default UserPill
