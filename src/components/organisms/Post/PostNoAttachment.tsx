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
            <article onClick={() => naviagtor(`/post/${post._id}`)} className={PST.postv2}>
                <div className={PST.avatarWrapper}>
                    <img className={PST.avatar} src={post.owner.avatar || deafultPfp} alt="" />
                </div>
                <div className={PST.content}>
                    <div className={PST.owner}>
                        <h4>{post.owner.username}</h4>
                        <span>@{post.owner.username}</span>
                    </div>
                    <div>{post.content}</div>
                    <div onClick={e => e.stopPropagation()}>
                        <Actions post={post} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default PostNoAttachment
