import { gql, useApolloClient } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deafultPfp, PostType } from '../../../../types'
import Divider from '../../../atoms/Divider'
import { GET_POSTS_QUERY } from '../../../pages/MainFeed'
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
            owner {
                _id
                username
                avatar
                isStaff
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
                }
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
            </div>
        </>
    )
}

export default PostInfo
