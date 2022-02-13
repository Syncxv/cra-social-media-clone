import React from 'react'
import { CommentType, deafultPfp } from '../../../../types'
import Actions from '../Actions'
import PST from '../Post.module.scss'
type Props = {
    comment: CommentType
}

export const Comment: React.FC<Props> = ({ comment }) => {
    return (
        <article className={PST.postv2}>
            <div className={PST.avatarWrapper}>
                <img className={PST.avatar} src={comment.author.avatar || deafultPfp} alt="" />
            </div>
            <div className={PST.content}>
                <div className={PST.owner}>
                    <h4>{comment.author.username}</h4>
                    <span>@{comment.author.username}</span>
                </div>
                <div>{comment.content}</div>
                {/* <div onClick={e => e.stopPropagation()}>
                        <Actions moreInfo={false} comment={comment} />
                    </div> */}
            </div>
        </article>
    )
}
