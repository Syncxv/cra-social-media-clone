import { ChatDots, Heart, PaperPlaneTilt } from 'phosphor-react'
import React from 'react'

import PST from './Post.module.scss'

interface Props {
    title: string
    content: string
    username: string
}

const Post: React.FC<Props> = ({ content, username }) => {
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
                    <img src="https://i.imgur.com/Lte0y2v.jpeg" alt="" />
                </div>
                <div className={PST.actions}>
                    <PostButton icon={<Heart color="white" size={32} />} likes={20} />
                    <PostButton icon={<ChatDots color="white" size={32} />} likes={20} />
                    <PostButton icon={<PaperPlaneTilt color="white" size={32} />} />
                </div>
                <div className={PST.allContent}>
                    <div className={PST.contentUser}>
                        <img className={PST.avatar} src="https://i.imgur.com/JUVFPMN.png" alt="" />
                        <div className={PST.name}>{username}</div>
                    </div>
                    <span className={PST.content}>{content}</span>
                </div>
            </div>
        </>
    )
}

export default Post
