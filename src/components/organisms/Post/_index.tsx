import { ChatDots, Heart, PaperPlaneTilt } from 'phosphor-react'
import React from 'react'
import { deafultPfp, PostType } from '../../../types'

import PST from './Post.module.scss'

interface Props {
    post: PostType
}

const Post: React.FC<Props> = ({ post }) => {
    const PostButton: React.FC<{ icon: any; likes?: number }> = ({ icon, likes }) => {
        return (
            <>
                <div className={PST.actionButtonWrapper}>
                    <button className={PST.actionButton}>
                        <div className={PST.icon}>{icon}</div>
                    </button>
                    {likes && <p className={PST.likes}>{likes}</p>}
                </div>
            </>
        )
    }
    return (
        <>
            <div className={PST.post}>
                <div className={PST.postImage}>
                    <img src={post.attachment || deafultPfp} alt="" />
                </div>
                <div className={PST.actions}>
                    <PostButton icon={<Heart color="white" size={32} />} likes={20} />
                    <PostButton icon={<ChatDots color="white" size={32} />} likes={20} />
                    <PostButton icon={<PaperPlaneTilt color="white" size={32} />} />
                </div>
                <div className={PST.allContent}>
                    <div className={PST.contentUser}>
                        <img className={PST.avatar} src={post.owner.avatar || deafultPfp} alt="" />
                        <div className={PST.name}>{post.owner.username}</div>
                    </div>
                    <span className={PST.content}>{post.content}</span>
                </div>
            </div>
        </>
    )
}

export default Post
