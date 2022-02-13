import { gql, useApolloClient } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userStore } from '../../../../stores/userStore'
import { deafultPfp, PostType } from '../../../../types'
import Divider from '../../../atoms/Divider'
import { GET_POSTS_QUERY } from '../../../pages/MainFeed'
import Actions from '../Actions'
import { Comment } from '../Comment'
import ReplyPost from './components/ReplyPost'
import PI from './PostInfo.module.scss'

interface Props {}

interface GetPostsQueryResponseIdkMAN {
    getPosts: PostType[]
}
export const GET_POST_QUERY = gql`
    query GetPost($post_id: String!) {
        getPost(post_id: $post_id) {
            _id
            title
            content
            attachment
            likes
            likedUsers
            createdAt
            updatedAt
            owner {
                _id
                username
                avatar
                isStaff
                createdAt
                updatedAt
            }
            comments {
                _id
                content
                likes
                author {
                    _id
                    username
                    avatar
                    isStaff
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
        }
    }
`
interface getPostDataReturnType {
    data: PostType | null | undefined
    loading: boolean
    error: string | null
}
export const useGetPostData = (id: string): getPostDataReturnType => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<PostType | null | undefined>(null)
    const [error, setError] = useState<string | null>(null)
    const client = useApolloClient()
    useEffect(() => {
        const cachedData = client.readQuery<GetPostsQueryResponseIdkMAN>({ query: GET_POSTS_QUERY })
        if (cachedData) {
            setLoading(false)
            setData(cachedData.getPosts.find(s => s._id === id))
            return
        }
        client
            .query<{ getPost: PostType }>({
                query: GET_POST_QUERY,
                variables: { post_id: id }
            })
            .then(({ data }) => {
                setLoading(false)
                setData(data.getPost)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
                setError(err)
            })
            .finally(() => setLoading(false))
    }, [id])

    return { data, loading, error }
}
const PostInfo: React.FC<Props> = ({}) => {
    const { id } = useParams<{ id: string }>()
    const { data: currentPost, loading } = useGetPostData(id!)
    const currentUser = userStore(state => state.user)
    if (loading) return <div>loading</div>
    if (!currentPost) return <div>WHICH POST IS THAT EH</div>
    return (
        <>
            <div className={PI.expandedPost}>
                <div className={PI.user}>
                    <div className={PI.avatar}>
                        <img className={PI.img} src={currentPost.owner.avatar || deafultPfp} alt="" />
                    </div>
                    <div className={PI.nameWrapper}>
                        <div className={PI.name}>{currentPost.owner.username}</div>
                        <div className={PI.displayName}>@{currentPost.owner.username}</div>
                    </div>
                </div>
                <div className={PI.content}>
                    <div className={PI.text}>{currentPost.content}</div>
                    <Divider hidden={true} margin={0.5} />
                    {currentPost.attachment && (
                        <div className={PI.attachmentWrapper}>
                            <img src={currentPost.attachment} alt="" />
                        </div>
                    )}
                </div>
                <Divider margin={0.8} />
                <Actions moreInfo={true} post={currentPost} />
                <Divider margin={0.5} />
            </div>
            {Boolean(currentPost.comments.length) &&
                currentPost.comments.map(comment => <Comment key={comment._id} comment={comment} />)}
            <ReplyPost user={currentUser!} />
            <Divider hidden={true} marginBottom={10} />
        </>
    )
}

export default PostInfo
