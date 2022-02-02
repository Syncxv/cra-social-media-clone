import { Chat, Heart } from 'phosphor-react'
import React, { CSSProperties } from 'react'
import { userStore } from '../../../stores/userStore'
import { deafultPfp, PostType } from '../../../types'
import PST from './Post.module.scss'

type Props = {
    post: PostType
}

const PostNoAttachment: React.FC<Props> = ({ post }) => {
    const ActionButton: React.FC<{ Icon: any; amount?: number; color: string }> = ({
        Icon,
        amount,
        color
    }) => {
        return (
            <div style={{ '--color': color } as CSSProperties} className={PST.actionButton}>
                <div className={PST.icon}>{<Icon size={24} />}</div>
                {amount && <div className={PST.amount}>{amount}</div>}
            </div>
        )
    }
    return (
        <>
            <div className={PST.postTextOnly}>
                <div className={PST.postTextOnly__contentWrapper}>
                    <div className={PST.postTextOnly__avatar}>
                        <img src={post.owner.avatar || deafultPfp} alt="" />
                    </div>
                    <div className={PST.postTextOnly__content}>
                        <div className={PST.userInfo}>
                            <div className={PST.username}>{post.owner.username}</div>
                        </div>
                        <div className={PST.postTextOnly__text}>{post.content}</div>
                    </div>
                </div>
                <div className={PST.postTextOnly__actions}>
                    <ActionButton color="rgb(255, 19, 97)" amount={post.likes} Icon={Heart}></ActionButton>
                    <ActionButton
                        color="rgb(19, 255, 58)"
                        amount={post.comments.length}
                        Icon={Chat}
                    ></ActionButton>
                </div>
            </div>
        </>
    )
}

export default PostNoAttachment
