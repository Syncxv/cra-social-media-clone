import { Chat, Heart } from 'phosphor-react'
import React, { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from '../../../stores/userStore'
import { deafultPfp, PostType } from '../../../types'
import Actions from './Actions'
import PST from './Post.module.scss'

type Props = {
    post: PostType
}

const PostNoAttachment: React.FC<Props> = ({ post }) => {
    const naviagtor = useNavigate()
    return (
        <>
            <article onClick={() => naviagtor(`/post/${post._id}`)} className={PST.postTextOnly}>
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
                <Actions post={post} />
            </article>
        </>
    )
}

export default PostNoAttachment
