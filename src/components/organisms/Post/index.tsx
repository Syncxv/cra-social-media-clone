import { useNavigate } from 'react-router-dom'
import { deafultPfp, PostType } from '../../../types'
import Divider from '../../atoms/Divider'
import Actions from './Actions'
import PST from './Post.module.scss'

type Props = {
    post: PostType
}

const PostV2: React.FC<Props> = ({ post }) => {
    const naviagtor = useNavigate()
    return (
        <>
            <Divider hidden={true} margin={0.5} />
            <article
                onClick={(e: React.MouseEvent<HTMLDivElement>) => naviagtor(`/post/${post._id}`)}
                className={PST.postv2}
            >
                <div className={PST.avatarWrapper}>
                    <img className={PST.avatar} src={post.owner.avatar || deafultPfp} alt="" />
                </div>
                <div className={PST.content}>
                    <div className={PST.owner}>
                        <h4>{post.owner.displayName}</h4>
                        <span>@{post.owner.username}</span>
                    </div>
                    <div>{post.content}</div>
                    <div className={PST.attachmentWrapper}>
                        {post.attachment && <img className={PST.attachemnt} src={post.attachment} alt="" />}
                    </div>
                    <div onClick={e => e.stopPropagation()}>
                        <Actions moreInfo={false} post={post} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default PostV2
