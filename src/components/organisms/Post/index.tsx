import React from 'react'

import PST from './Post.module.scss'

interface Props {
    title: string
    content: string
    username: string
}

const Post: React.FC<Props> = ({ title, content, username }) => {
    return (
        <>
            <div className={PST.post}>
                <div className={PST.user}>
                    <img className={PST.avatar} src="https://i.imgur.com/JUVFPMN.png" alt="" />
                    <div className={PST.name}>@{username}</div>
                </div>
                <div className={PST.postImage}>
                    <img src="https://i.imgur.com/Lte0y2v.jpeg" alt="" />
                </div>
                <div className={PST.allContent}>
                    <div className={PST.contentUser}>
                        <img className={PST.avatar} src="https://i.imgur.com/JUVFPMN.png" alt="" />
                        <div className={PST.name}>@{username}</div>
                    </div>
                    <span className={PST.content}>{content}</span>
                </div>
            </div>
        </>
    )
}

export default Post
