import { Image } from 'phosphor-react'
import React, { useState } from 'react'
import { deafultPfp, UserType } from '../../../../../types'
import { Input } from '../../../../pages/Auth/Login'
import { ActionButton } from '../../Actions'

import RP from './ReplyPost.module.scss'

type Props = {
    user?: UserType
}

const ReplyPost: React.FC<Props> = ({ user }) => {
    const [focused, setFocus] = useState(false)
    console.log(focused)
    return (
        <>
            <div style={{ height: focused ? '128px' : '64px' }} className={RP.replyWrapper}>
                <div className={RP.reply}>
                    <div className={RP.avatarWrapper}>
                        <img className={RP.pfp} src={user?.avatar || deafultPfp} />
                    </div>
                    <div className={RP.formSection}>
                        <input
                            onFocus={() => (focused ? null : setFocus(true))}
                            className={RP.input}
                            type="text"
                            placeholder="Type something :|"
                        />
                    </div>
                </div>
                <div className={RP.replyActions}>
                    {focused ? (
                        <ActionButton
                            color="rgb(35, 19, 255)"
                            active={false}
                            onClick={() => console.log('hi')}
                            Icon={Image}
                            size={24}
                            fill={true}
                        />
                    ) : (
                        <div> </div>
                    )}
                    <button style={{ alignSelf: focused ? 'flex-end' : 'center' }} className={RP.replyButton}>
                        Reply
                    </button>
                </div>
            </div>
        </>
    )
}

export default ReplyPost
