import { gql, useApolloClient } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostType } from '../../../../types'
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
            <div>{currentPost.content}</div>
        </>
    )
}

export default PostInfo
