import { deafultPfp, PostType } from '../../../types'
import Divider from '../../atoms/Divider'
import Actions from './Actions'
import PST from './Post.module.scss'

type Props = {
    post: PostType
}

const PostV2: React.FC<Props> = ({ post }) => {
    return (
        <>
            <Divider hidden={true} margin={0.5} />
            <article className={PST.postv2}>
                <div className={PST.avatarWrapper}>
                    <img className={PST.avatar} src={post.owner.avatar || deafultPfp} alt="" />
                </div>
                <div className={PST.content}>
                    <div className={PST.owner}>
                        {/*TODO: ok ima add display name to the backend AND THEN change below to owner.displayName hehe but not rn */}
                        <h4>{post.owner.username}</h4>
                        <span>@{post.owner.username}</span>
                    </div>
                    <div>{post.content}</div>
                    <div className={PST.attachmentWrapper}>
                        {post.attachment && <img className={PST.attachemnt} src={post.attachment} alt="" />}
                    </div>
                    <Actions post={post} />
                </div>
            </article>
        </>
    )
}

export default PostV2
